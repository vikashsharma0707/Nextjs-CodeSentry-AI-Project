const axios = require("axios");
const { Octokit } = require("@octokit/rest");
const env = require("../config/env");
const ApiError = require("../utils/ApiError");
const logger = require("../utils/logger");

/** File extensions considered "code" for review purposes. */
const CODE_EXTENSIONS = new Set([
  "js", "jsx", "ts", "tsx", "py", "go", "rs", "rb", "java", "kt", "swift",
  "c", "cpp", "h", "hpp", "cs", "php", "vue", "svelte",
]);

const EXT_TO_LANGUAGE = {
  js: "JavaScript", jsx: "JavaScript", ts: "TypeScript", tsx: "TypeScript",
  py: "Python", go: "Go", rs: "Rust", rb: "Ruby", java: "Java", kt: "Kotlin",
  swift: "Swift", c: "C", cpp: "C++", h: "C", hpp: "C++", cs: "C#",
  php: "PHP", vue: "Vue", svelte: "Svelte",
};

const IGNORED_DIR_SEGMENTS = new Set([
  "node_modules", "dist", "build", ".next", ".git", "vendor", "coverage", "__pycache__",
]);

/**
 * Exchanges a GitHub OAuth `code` for an access token.
 */
async function exchangeCodeForToken(code) {
  const res = await axios.post(
    "https://github.com/login/oauth/access_token",
    {
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: env.GITHUB_REDIRECT_URI,
    },
    { headers: { Accept: "application/json" } }
  );

  if (res.data.error) {
    throw ApiError.badRequest(res.data.error_description || "GitHub OAuth exchange failed.");
  }

  return {
    accessToken: res.data.access_token,
    scope: res.data.scope,
    tokenType: res.data.token_type,
  };
}

function getClient(accessToken) {
  return new Octokit({ auth: accessToken });
}

async function getAuthenticatedGithubUser(accessToken) {
  const octokit = getClient(accessToken);
  const { data } = await octokit.users.getAuthenticated();
  return data; // { id, login, avatar_url, email, name, ... }
}

async function listRepos(accessToken, { perPage = 50 } = {}) {
  const octokit = getClient(accessToken);
  const { data } = await octokit.repos.listForAuthenticatedUser({
    per_page: perPage,
    sort: "updated",
    visibility: "all",
  });

  return data.map((r) => ({
    id: r.id,
    name: r.name,
    full_name: r.full_name,
    private: r.private,
    language: r.language || "Unknown",
    stars: r.stargazers_count,
    updated_at: r.updated_at,
    default_branch: r.default_branch,
    html_url: r.html_url,
  }));
}

async function getRepoLanguages(accessToken, owner, repo) {
  const octokit = getClient(accessToken);
  const { data } = await octokit.repos.listLanguages({ owner, repo });
  return data; // { TypeScript: 12345, JavaScript: 6789, ... }
}

/**
 * Recursively walks the repo's git tree (single API call using the
 * recursive flag) and returns a flat list of code file paths, skipping
 * common build/vendor directories, capped at `maxFiles`.
 */
async function listCodeFiles(accessToken, owner, repo, { maxFiles = 15 } = {}) {
  const octokit = getClient(accessToken);

  const { data: repoData } = await octokit.repos.get({ owner, repo });
  const branch = repoData.default_branch;

  const { data: refData } = await octokit.git.getRef({ owner, repo, ref: `heads/${branch}` });
  const commitSha = refData.object.sha;

  const { data: treeData } = await octokit.git.getTree({
    owner,
    repo,
    tree_sha: commitSha,
    recursive: "true",
  });

  const files = (treeData.tree || [])
    .filter((item) => item.type === "blob")
    .filter((item) => {
      const segments = item.path.split("/");
      if (segments.some((seg) => IGNORED_DIR_SEGMENTS.has(seg))) return false;
      const ext = item.path.split(".").pop().toLowerCase();
      return CODE_EXTENSIONS.has(ext);
    })
    .filter((item) => (item.size || 0) < 60000) // skip very large generated files
    .slice(0, maxFiles)
    .map((item) => ({
      path: item.path,
      sha: item.sha,
      language: EXT_TO_LANGUAGE[item.path.split(".").pop().toLowerCase()] || "Unknown",
    }));

  return { branch, commitSha, files };
}

async function getFileContent(accessToken, owner, repo, path, ref) {
  const octokit = getClient(accessToken);
  const { data } = await octokit.repos.getContent({ owner, repo, path, ref });
  if (Array.isArray(data) || !data.content) {
    return "";
  }
  return Buffer.from(data.content, data.encoding || "base64").toString("utf-8");
}

/**
 * Creates a new branch, commits the given file changes, and opens a
 * pull request against the repo's default branch.
 * @param {{path: string, content: string}[]} fileChanges
 */
async function createFixPullRequest(accessToken, owner, repo, fileChanges, { title, body } = {}) {
  const octokit = getClient(accessToken);

  const { data: repoData } = await octokit.repos.get({ owner, repo });
  const baseBranch = repoData.default_branch;

  const { data: baseRef } = await octokit.git.getRef({ owner, repo, ref: `heads/${baseBranch}` });
  const baseSha = baseRef.object.sha;

  const branchName = `bunobagera/ai-fixes-${Date.now()}`;
  await octokit.git.createRef({
    owner,
    repo,
    ref: `refs/heads/${branchName}`,
    sha: baseSha,
  });

  for (const change of fileChanges) {
    let existingSha;
    try {
      const { data: existing } = await octokit.repos.getContent({
        owner,
        repo,
        path: change.path,
        ref: branchName,
      });
      existingSha = Array.isArray(existing) ? undefined : existing.sha;
    } catch (err) {
      existingSha = undefined; // file doesn't exist yet
    }

    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: change.path,
      message: `fix: apply AI-suggested fixes to ${change.path}`,
      content: Buffer.from(change.content, "utf-8").toString("base64"),
      branch: branchName,
      sha: existingSha,
    });
  }

  const { data: pr } = await octokit.pulls.create({
    owner,
    repo,
    title: title || "AI-suggested fixes from BunoBagera",
    head: branchName,
    base: baseBranch,
    body:
      body ||
      "This pull request was generated automatically by BunoBagera's AI code review assistant.",
  });

  return { prUrl: pr.html_url, branch: branchName };
}

module.exports = {
  exchangeCodeForToken,
  getAuthenticatedGithubUser,
  listRepos,
  getRepoLanguages,
  listCodeFiles,
  getFileContent,
  createFixPullRequest,
};
