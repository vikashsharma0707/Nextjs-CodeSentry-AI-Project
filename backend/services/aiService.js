const axios = require("axios");
const env = require("../config/env");
const ApiError = require("../utils/ApiError");
const logger = require("../utils/logger");

const client = axios.create({
  baseURL: env.OPENROUTER_BASE_URL,
  headers: {
    Authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
    "Content-Type": "application/json",
    "HTTP-Referer": env.CLIENT_URL,
    "X-Title": "BunoBagera",
  },
  timeout: 90_000,
});

function ensureConfigured() {
  if (!env.OPENROUTER_API_KEY) {
    throw ApiError.internal(
      "AI provider is not configured on the server. Set OPENROUTER_API_KEY in .env."
    );
  }
}

/**
 * Non-streaming chat completion. Returns { content, usage }.
 */
async function chatCompletion(messages, { temperature = 0.3, maxTokens = 2000, jsonMode = false } = {}) {
  ensureConfigured();

  const payload = {
    model: env.OPENROUTER_MODEL,
    messages,
    temperature,
    max_tokens: maxTokens,
  };
  if (jsonMode) payload.response_format = { type: "json_object" };

  try {
    const res = await client.post("/chat/completions", payload);
    const choice = res.data.choices?.[0];
    return {
      content: choice?.message?.content ?? "",
      usage: res.data.usage || { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 },
    };
  } catch (err) {
    const status = err.response?.status;
    const detail = err.response?.data?.error?.message || err.response?.data?.message || err.message;
    logger.error(`AI chatCompletion failed [status ${status || "?"}]: ${detail}`);
    throw ApiError.internal(`AI provider request failed: ${detail}`);
  }
}

/**
 * Streaming chat completion. Invokes onDelta(textChunk) as tokens arrive.
 * Resolves with { content, usage } once the stream ends.
 */
async function streamChatCompletion(messages, onDelta, { temperature = 0.3, maxTokens = 3000 } = {}) {
  ensureConfigured();

  const response = await client.post(
    "/chat/completions",
    {
      model: env.OPENROUTER_MODEL,
      messages,
      temperature,
      max_tokens: maxTokens,
      stream: true,
    },
    { responseType: "stream" }
  );

  return new Promise((resolve, reject) => {
    let fullContent = "";
    let buffer = "";
    let usage = { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 };

    response.data.on("data", (chunk) => {
      buffer += chunk.toString("utf-8");
      const lines = buffer.split("\n");
      buffer = lines.pop(); // keep the last (possibly incomplete) line

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || !trimmed.startsWith("data:")) continue;
        const data = trimmed.replace(/^data:\s*/, "");
        if (data === "[DONE]") continue;

        try {
          const parsed = JSON.parse(data);
          const delta = parsed.choices?.[0]?.delta?.content;
          if (delta) {
            fullContent += delta;
            onDelta(delta);
          }
          if (parsed.usage) usage = parsed.usage;
        } catch (e) {
          // ignore malformed keep-alive lines
        }
      }
    });

    response.data.on("end", () => resolve({ content: fullContent, usage }));
    response.data.on("error", (err) => reject(err));
  });
}

/**
 * Reviews a batch of files (path + content) and returns a markdown report.
 */
async function reviewFileBatch(files, { repoName, reviewType = "full" }, onDelta) {
  const focusMap = {
    full: "correctness, security, performance, and maintainability",
    security: "security vulnerabilities (injection, auth, secrets, unsafe deserialization, etc.)",
    style: "code style, naming, formatting, and idiomatic usage",
    performance: "performance bottlenecks, unnecessary re-computation, and inefficient algorithms",
  };

  const filesBlock = files
    .map((f) => `### File: ${f.path}\n\`\`\`${f.language.toLowerCase()}\n${f.content}\n\`\`\``)
    .join("\n\n");

  const messages = [
    {
      role: "system",
      content:
        "You are a senior staff software engineer performing a rigorous code review. " +
        "Be specific, cite line numbers where possible, and always propose a concrete fix. " +
        "Format your response in clean GitHub-flavored markdown with headings per file.",
    },
    {
      role: "user",
      content: `Repository: ${repoName}\nFocus areas: ${focusMap[reviewType] || focusMap.full}.\n\nReview the following files:\n\n${filesBlock}`,
    },
  ];

  if (onDelta) {
    return streamChatCompletion(messages, onDelta, { maxTokens: 2500 });
  }
  return chatCompletion(messages, { maxTokens: 2500 });
}

/**
 * Continues a review conversation with a new user message.
 */
async function continueReviewChat(reviewMarkdownContext, priorMessages, userMessage) {
  const messages = [
    {
      role: "system",
      content:
        "You are BunoBagera's AI code review assistant. You previously reviewed a repository; " +
        "the review is provided as context below. Answer follow-up questions, clarify findings, " +
        "or propose additional fixes. Keep answers concise and actionable.\n\n" +
        `--- ORIGINAL REVIEW CONTEXT ---\n${reviewMarkdownContext}\n--- END CONTEXT ---`,
    },
    ...priorMessages.map((m) => ({ role: m.role, content: m.content })),
    { role: "user", content: userMessage },
  ];

  return chatCompletion(messages, { maxTokens: 1200 });
}

/**
 * Given the review findings and original file contents, asks the model to
 * produce the corrected full file contents so they can be committed to a PR.
 * Returns [{ path, content }].
 */
async function generateFixedFiles(files, reviewMarkdown) {
  const filesBlock = files
    .map((f) => `### File: ${f.path}\n\`\`\`${f.language.toLowerCase()}\n${f.content}\n\`\`\``)
    .join("\n\n");

  const messages = [
    {
      role: "system",
      content:
        "You are an expert software engineer. Given a code review and the original files, " +
        'rewrite each file with the fixes applied. Respond ONLY with strict JSON of the shape ' +
        '{"files": [{"path": "string", "content": "string"}]} — no markdown, no commentary, no code fences.',
    },
    {
      role: "user",
      content: `Code review findings:\n${reviewMarkdown}\n\nOriginal files:\n${filesBlock}\n\nReturn the fixed versions of each file as JSON.`,
    },
  ];

  const { content } = await chatCompletion(messages, { maxTokens: 4000, jsonMode: true });

  try {
    const parsed = JSON.parse(content);
    if (!Array.isArray(parsed.files)) throw new Error("Malformed AI response: missing files array");
    return parsed.files;
  } catch (err) {
    logger.error(`Failed to parse AI fix response: ${err.message}`);
    throw ApiError.internal("AI returned an unparsable fix response. Please try again.");
  }
}

/**
 * Analyzes a GitHub profile's repos/languages and produces a structured
 * developer persona. Returns the exact shape the dashboard widget expects.
 */
async function analyzeGithubProfile({ username, repos, languageTotals }) {
  const topLangEntries = Object.entries(languageTotals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);
  const totalBytes = topLangEntries.reduce((sum, [, bytes]) => sum + bytes, 0) || 1;

  const repoSummary = repos
    .slice(0, 20)
    .map((r) => `- ${r.full_name} (${r.language || "Unknown"}, ${r.stars} stars, updated ${r.updated_at})`)
    .join("\n");

  const messages = [
    {
      role: "system",
      content:
        "You are a technical recruiter and staff engineer analyzing a developer's GitHub profile. " +
        'Respond ONLY with strict JSON: {"developerPersona": string, "profileSummary": string, ' +
        '"strengths": string[], "recommendations": string[]}. developerPersona is a short 2-4 word ' +
        "title (e.g. 'Backend Systems Engineer'). profileSummary is 2-3 sentences. strengths and " +
        "recommendations should each have 3-5 concise, specific items.",
    },
    {
      role: "user",
      content: `GitHub user: ${username}\n\nRepositories:\n${repoSummary || "No public repositories found."}`,
    },
  ];

  const { content, usage } = await chatCompletion(messages, { maxTokens: 900, jsonMode: true });

  let parsed;
  try {
    parsed = JSON.parse(content);
  } catch (err) {
    parsed = {
      developerPersona: "Full-Stack Developer",
      profileSummary: "Analysis could not be fully parsed; showing a fallback summary based on repository data.",
      strengths: [],
      recommendations: [],
    };
  }

  const topLanguages = topLangEntries.map(([name, bytes], i) => ({
    name,
    percentage: Math.round((bytes / totalBytes) * 100),
    color: ["#a78bfa", "#3b82f6", "#22d3ee", "#f97316", "#ef4444", "#10b981"][i % 6],
  }));

  return {
    developerPersona: parsed.developerPersona || "Software Developer",
    profileSummary: parsed.profileSummary || "",
    strengths: parsed.strengths || [],
    topLanguages,
    recommendations: parsed.recommendations || [],
    usage,
  };
}

/**
 * Reviews a raw pasted code snippet (used by the "New Review" paste editor).
 * Returns a list of issues matching the frontend's IssueResult shape.
 */
async function reviewSnippet(code, language, reviewType) {
  const messages = [
    {
      role: "system",
      content:
        "You are a senior code reviewer. Analyze the given code snippet and respond ONLY with strict JSON: " +
        '{"issues": [{"line": number, "severity": "critical"|"high"|"medium"|"low", "type": string, ' +
        '"description": string, "snippet": string}]}. snippet should be the exact offending line(s).',
    },
    {
      role: "user",
      content: `Language: ${language}\nReview type: ${reviewType}\n\n\`\`\`${language}\n${code}\n\`\`\``,
    },
  ];

  const { content } = await chatCompletion(messages, { maxTokens: 1500, jsonMode: true });
  try {
    const parsed = JSON.parse(content);
    return Array.isArray(parsed.issues) ? parsed.issues : [];
  } catch (err) {
    return [];
  }
}

module.exports = {
  chatCompletion,
  streamChatCompletion,
  reviewFileBatch,
  continueReviewChat,
  generateFixedFiles,
  analyzeGithubProfile,
  reviewSnippet,
};
