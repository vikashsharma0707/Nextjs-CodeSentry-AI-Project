const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const User = require("../models/User");
const GithubProfileAnalysis = require("../models/GithubProfileAnalysis");
const githubService = require("../services/githubService");
const aiService = require("../services/aiService");
const usageService = require("../services/usageService");
const { mapUserForFrontend } = require("./userController.helpers");

/**
 * POST /api/github/connect
 * body: { code }
 * Links a GitHub account to an already-authenticated user (settings page /
 * "Connect Account" flow, as opposed to GitHub login/signup).
 */
const connectGithub = asyncHandler(async (req, res) => {
  const { code } = req.body;

  const { accessToken, scope } = await githubService.exchangeCodeForToken(code);
  const ghUser = await githubService.getAuthenticatedGithubUser(accessToken);

  const alreadyLinked = await User.findOne({
    githubId: String(ghUser.id),
    _id: { $ne: req.user._id },
  });
  if (alreadyLinked) {
    throw ApiError.conflict("This GitHub account is already linked to another user.");
  }

  const user = await User.findById(req.user._id);
  user.githubId = String(ghUser.id);
  user.githubUsername = ghUser.login;
  user.githubAccessToken = accessToken;
  user.githubConnected = true;
  user.githubTokenScope = scope;
  if (!user.avatarUrl) user.avatarUrl = ghUser.avatar_url || "";
  await user.save();

  res.status(200).json({ message: "GitHub connected successfully.", user: mapUserForFrontend(user) });
});

/**
 * DELETE /api/github/disconnect
 */
const disconnectGithub = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  user.githubConnected = false;
  user.githubAccessToken = undefined;
  user.githubTokenScope = "";
  await user.save();

  res.status(200).json({ message: "GitHub disconnected.", user: mapUserForFrontend(user) });
});

/**
 * GET /api/github/repos
 * Returns the raw-ish GitHub repo list shape the frontend renders directly
 * (id, name, full_name, private, language, stars, updated_at).
 */
const getRepos = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("+githubAccessToken");

  if (!user.githubConnected || !user.githubAccessToken) {
    throw ApiError.badRequest("GitHub account is not connected.");
  }

  const repos = await githubService.listRepos(user.githubAccessToken);
  res.status(200).json(repos);
});

/**
 * GET /api/github/profile-analysis?force=true
 * Returns { developerPersona, profileSummary, strengths, topLanguages, recommendations }
 */
const getProfileAnalysis = asyncHandler(async (req, res) => {
  const force = req.query.force === "true";
  const user = await User.findById(req.user._id).select("+githubAccessToken");

  if (!user.githubConnected || !user.githubAccessToken) {
    throw ApiError.badRequest("GitHub account is not connected.");
  }

  let cached = await GithubProfileAnalysis.findOne({ user: user._id });
  if (cached && !force && !cached.isStale()) {
    return res.status(200).json({
      developerPersona: cached.developerPersona,
      profileSummary: cached.profileSummary,
      strengths: cached.strengths,
      topLanguages: cached.topLanguages,
      recommendations: cached.recommendations,
    });
  }

  const repos = await githubService.listRepos(user.githubAccessToken, { perPage: 30 });

  const languageTotals = {};
  const topRepos = repos.slice(0, 8);
  for (const repo of topRepos) {
    try {
      const [owner, repoName] = repo.full_name.split("/");
      const langs = await githubService.getRepoLanguages(user.githubAccessToken, owner, repoName);
      for (const [lang, bytes] of Object.entries(langs)) {
        languageTotals[lang] = (languageTotals[lang] || 0) + bytes;
      }
    } catch (err) {
      // Skip repos we can't read languages for (e.g. empty repo)
    }
  }

  const analysis = await aiService.analyzeGithubProfile({
    username: user.githubUsername,
    repos,
    languageTotals,
  });

  await GithubProfileAnalysis.findOneAndUpdate(
    { user: user._id },
    {
      ...analysis,
      reposAnalyzed: repos.length,
      generatedAt: new Date(),
    },
    { upsert: true, new: true }
  );

  usageService.logUsage(user._id, "github.profile-analysis", analysis.usage || {});
  delete analysis.usage;

  res.status(200).json(analysis);
});

module.exports = { connectGithub, disconnectGithub, getRepos, getProfileAnalysis };
