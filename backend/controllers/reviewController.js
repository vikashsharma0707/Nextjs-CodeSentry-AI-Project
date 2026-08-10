// const asyncHandler = require("../utils/asyncHandler");
// const ApiError = require("../utils/ApiError");
// const { initSSE, sendSSE } = require("../utils/sse");
// const { parsePagination, parseSort, buildMeta } = require("../utils/paginate");

// const User = require("../models/User");
// const Review = require("../models/Review");
// const githubService = require("../services/githubService");
// const aiService = require("../services/aiService");
// const usageService = require("../services/usageService");

// const BATCH_SIZE = 3;

// function chunkArray(arr, size) {
//   const out = [];
//   for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
//   return out;
// }

// /**
//  * GET /api/reviews?sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=25
//  * Strapi-style response: { data: [...], meta: { pagination } }
//  */
// const listReviews = asyncHandler(async (req, res) => {
//   const { page, pageSize, skip } = parsePagination(req.query);
//   const sort = parseSort(req.query.sort);

//   const [reviews, total] = await Promise.all([
//     Review.find({ user: req.user._id }).sort(sort).skip(skip).limit(pageSize),
//     Review.countDocuments({ user: req.user._id }),
//   ]);

//   res.status(200).json({
//     data: reviews.map(serializeReview),
//     meta: buildMeta({ page, pageSize, total }),
//   });
// });

// /**
//  * GET /api/reviews/:id
//  */
// const getReview = asyncHandler(async (req, res) => {
//   const review = await Review.findOne({ _id: req.params.id, user: req.user._id });
//   if (!review) throw ApiError.notFound("Review not found.");

//   res.status(200).json({ data: serializeReview(review) });
// });

// function serializeReview(review) {
//   return {
//     id: review._id,
//     repositoryOwner: review.repositoryOwner,
//     repositoryName: review.repositoryName,
//     reviewType: review.reviewType,
//     status: review.status,
//     issuesFoundCount: review.issuesFoundCount,
//     messages: review.messages,
//     prUrl: review.prUrl,
//     createdAt: review.createdAt,
//     updatedAt: review.updatedAt,
//   };
// }

// /**
//  * GET /api/review/analyze-stream?owner=&repo=&token=&reviewType=
//  * Server-Sent Events: progress -> chunk (x N batches) -> complete | error
//  *
//  * The JWT arrives as a query param because native EventSource cannot send
//  * custom headers — the `protect` middleware already supports this.
//  */
// const analyzeStream = asyncHandler(async (req, res) => {
//   const { owner, repo } = req.query;
//   const reviewType = ["full", "security", "style", "performance"].includes(req.query.reviewType)
//     ? req.query.reviewType
//     : "full";

//   initSSE(res);
//   let review = null;
//   const cleanupOnClose = () => {
//     if (review && review.status === "pending") review.save().catch(() => {});
//   };
//   req.on("close", cleanupOnClose);

//   const user = await User.findById(req.user._id).select("+githubAccessToken");
//   if (!user.githubConnected || !user.githubAccessToken) {
//     sendSSE(res, "error", { message: "GitHub account is not connected." });
//     return res.end();
//   }

//   try {
//     review = await Review.create({
//       user: user._id,
//       repositoryOwner: owner,
//       repositoryName: repo,
//       reviewType,
//       status: "pending",
//       messages: [{ role: "system", content: `AI code review of ${owner}/${repo} (${reviewType}).` }],
//     });

//     sendSSE(res, "progress", { step: "fetch-repo", message: `Fetching ${owner}/${repo} metadata...`, status: "active" });

//     const { branch, files } = await githubService.listCodeFiles(user.githubAccessToken, owner, repo, {
//       maxFiles: 15,
//     });
//     review.baseBranch = branch;
//     review.filesReviewed = files.map((f) => ({ path: f.path, language: f.language }));
//     await review.save();

//     if (files.length === 0) {
//       sendSSE(res, "error", { message: "No reviewable code files were found in this repository." });
//       review.status = "failed";
//       review.messages.push({ role: "assistant", content: "No reviewable code files were found in this repository." });
//       await review.save();
//       return res.end();
//     }

//     sendSSE(res, "progress", {
//       step: "select-files",
//       message: `Selected ${files.length} file(s) for review.`,
//       status: "active",
//     });

//     const batches = chunkArray(files, BATCH_SIZE);
//     const combinedSections = [];

//     for (let i = 0; i < batches.length; i++) {
//       sendSSE(res, "progress", {
//         step: `batch-${i}`,
//         message: `Analyzing batch ${i + 1} of ${batches.length} (${batches[i].map((f) => f.path).join(", ")})...`,
//         batchIndex: i,
//         totalBatches: batches.length,
//         status: "active",
//       });

//       const filesWithContent = await Promise.all(
//         batches[i].map(async (f) => ({
//           ...f,
//           content: await githubService.getFileContent(user.githubAccessToken, owner, repo, f.path, branch),
//         }))
//       );

//       const { content, usage } = await aiService.reviewFileBatch(filesWithContent, {
//         repoName: `${owner}/${repo}`,
//         reviewType,
//       });

//       usageService.logUsage(user._id, "review.analyze", usage);
//       review.tokensUsed += usage.total_tokens || 0;

//       combinedSections.push(content);

//       sendSSE(res, "chunk", { batchIndex: i, totalBatches: batches.length, content });
//     }

//     const fullMarkdown = combinedSections.join("\n\n---\n\n");
//     review.messages.push({ role: "assistant", content: fullMarkdown });
//     review.issuesFoundCount = (fullMarkdown.match(/\*\*(Critical|High|Medium|Low)\*\*/gi) || []).length;
//     review.status = "completed";
//     await review.save();

//     user.reviewCount += 1;
//     await user.save();

//     sendSSE(res, "complete", { reviewId: review._id });
//     res.end();
//   } catch (err) {
//     if (review) {
//       review.status = "failed";
//       review.messages.push({ role: "assistant", content: `Analysis failed: ${err.message}` });
//       await review.save().catch(() => {});
//     }
//     sendSSE(res, "error", { message: err.message || "Analysis failed unexpectedly." });
//     res.end();
//   } finally {
//     req.removeListener("close", cleanupOnClose);
//   }
// });

// /**
//  * POST /api/review/chat
//  * body: { reviewId, message }
//  */
// const chat = asyncHandler(async (req, res) => {
//   const { reviewId, message } = req.body;

//   const review = await Review.findOne({ _id: reviewId, user: req.user._id });
//   if (!review) throw ApiError.notFound("Review not found.");
//   if (review.status !== "completed") {
//     throw ApiError.badRequest("This review is not ready for follow-up questions yet.");
//   }

//   const reviewContext = review.messages.find((m) => m.role === "assistant")?.content || "";
//   const priorMessages = review.messages.filter((m) => m.role !== "system");

//   review.messages.push({ role: "user", content: message });

//   const { content, usage } = await aiService.continueReviewChat(reviewContext, priorMessages, message);
//   usageService.logUsage(req.user._id, "review.chat", usage);

//   review.messages.push({ role: "assistant", content });
//   review.tokensUsed += usage.total_tokens || 0;
//   await review.save();

//   res.status(200).json({ messages: review.messages });
// });

// /**
//  * POST /api/review/apply-fixes
//  * body: { reviewId }
//  */
// const applyFixes = asyncHandler(async (req, res) => {
//   const { reviewId } = req.body;

//   const review = await Review.findOne({ _id: reviewId, user: req.user._id });
//   if (!review) throw ApiError.notFound("Review not found.");
//   if (review.status !== "completed") {
//     throw ApiError.badRequest("This review must be completed before fixes can be applied.");
//   }
//   if (review.prUrl) {
//     throw ApiError.conflict("Fixes have already been applied for this review.");
//   }

//   const user = await User.findById(req.user._id).select("+githubAccessToken");
//   if (!user.githubConnected || !user.githubAccessToken) {
//     throw ApiError.badRequest("GitHub account is not connected.");
//   }

//   const reviewMarkdown = review.messages.find((m) => m.role === "assistant")?.content || "";

//   const filesWithContent = await Promise.all(
//     review.filesReviewed.map(async (f) => ({
//       ...f.toObject(),
//       content: await githubService.getFileContent(
//         user.githubAccessToken,
//         review.repositoryOwner,
//         review.repositoryName,
//         f.path,
//         review.baseBranch
//       ),
//     }))
//   );

//   const fixedFiles = await aiService.generateFixedFiles(filesWithContent, reviewMarkdown);
//   usageService.logUsage(req.user._id, "review.apply-fixes", {});

//   const { prUrl, branch } = await githubService.createFixPullRequest(
//     user.githubAccessToken,
//     review.repositoryOwner,
//     review.repositoryName,
//     fixedFiles,
//     {
//       title: `AI fixes for ${review.repositoryName} (BunoBagera review #${review._id})`,
//       body: `Automated fixes generated by BunoBagera based on the AI code review.\n\nReview ID: ${review._id}`,
//     }
//   );

//   review.prUrl = prUrl;
//   review.prBranch = branch;
//   await review.save();

//   res.status(200).json({ prUrl, branch });
// });

// /**
//  * GET /api/review/rate-limits
//  */
// const rateLimits = asyncHandler(async (req, res) => {
//   const stats = await usageService.getRateLimitStats(req.user._id);
//   res.status(200).json(stats);
// });

// /**
//  * POST /api/review/scan-snippet
//  * body: { code, language, reviewType }
//  * Powers the "New Review" paste-code editor.
//  */
// const scanSnippet = asyncHandler(async (req, res) => {
//   const { code, language, reviewType = "full" } = req.body;

//   const issues = await aiService.reviewSnippet(code, language, reviewType);
//   usageService.logUsage(req.user._id, "review.scan-snippet", {});

//   await Review.create({
//     user: req.user._id,
//     repositoryOwner: "local",
//     repositoryName: "snippet",
//     reviewType: "snippet",
//     status: "completed",
//     issues,
//     issuesFoundCount: issues.length,
//     messages: [
//       { role: "system", content: `Snippet scan (${language}, ${reviewType})` },
//       { role: "assistant", content: JSON.stringify(issues) },
//     ],
//   });

//   res.status(200).json({ issues });
// });

// module.exports = {
//   listReviews,
//   getReview,
//   analyzeStream,
//   chat,
//   applyFixes,
//   rateLimits,
//   scanSnippet,
// };



const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const { initSSE, sendSSE } = require("../utils/sse");
const { parsePagination, parseSort, buildMeta } = require("../utils/paginate");

const User = require("../models/User");
const Review = require("../models/Review");
const githubService = require("../services/githubService");
const aiService = require("../services/aiService");
const usageService = require("../services/usageService");

const BATCH_SIZE = 3;

function chunkArray(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

/**
 * GET /api/reviews?sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=25
 * Strapi-style response: { data: [...], meta: { pagination } }
 */
const listReviews = asyncHandler(async (req, res) => {
  const { page, pageSize, skip } = parsePagination(req.query);
  const sort = parseSort(req.query.sort);

  const [reviews, total] = await Promise.all([
    Review.find({ user: req.user._id }).sort(sort).skip(skip).limit(pageSize),
    Review.countDocuments({ user: req.user._id }),
  ]);

  res.status(200).json({
    data: reviews.map(serializeReview),
    meta: buildMeta({ page, pageSize, total }),
  });
});

/**
 * GET /api/reviews/:id
 */
const getReview = asyncHandler(async (req, res) => {
  const review = await Review.findOne({ _id: req.params.id, user: req.user._id });
  if (!review) throw ApiError.notFound("Review not found.");

  res.status(200).json({ data: serializeReview(review) });
});

function serializeReview(review) {
  return {
    id: review._id,
    repositoryOwner: review.repositoryOwner,
    repositoryName: review.repositoryName,
    reviewType: review.reviewType,
    primaryLanguage: review.primaryLanguage,
    status: review.status,
    issues: review.issues,
    issuesFoundCount: review.issuesFoundCount,
    messages: review.messages,
    prUrl: review.prUrl,
    createdAt: review.createdAt,
    updatedAt: review.updatedAt,
  };
}

/**
 * GET /api/review/analyze-stream?owner=&repo=&token=&reviewType=
 * Server-Sent Events: progress -> chunk (x N batches) -> complete | error
 *
 * The JWT arrives as a query param because native EventSource cannot send
 * custom headers — the `protect` middleware already supports this.
 */
const analyzeStream = asyncHandler(async (req, res) => {
  const { owner, repo } = req.query;
  const reviewType = ["full", "security", "style", "performance"].includes(req.query.reviewType)
    ? req.query.reviewType
    : "full";

  initSSE(res);
  let review = null;
  const cleanupOnClose = () => {
    if (review && review.status === "pending") review.save().catch(() => {});
  };
  req.on("close", cleanupOnClose);

  const user = await User.findById(req.user._id).select("+githubAccessToken");
  if (!user.githubConnected || !user.githubAccessToken) {
    sendSSE(res, "error", { message: "GitHub account is not connected." });
    return res.end();
  }

  try {
    review = await Review.create({
      user: user._id,
      repositoryOwner: owner,
      repositoryName: repo,
      reviewType,
      status: "pending",
      messages: [{ role: "system", content: `AI code review of ${owner}/${repo} (${reviewType}).` }],
    });

    sendSSE(res, "progress", { step: "fetch-repo", message: `Fetching ${owner}/${repo} metadata...`, status: "active" });

    const { branch, files } = await githubService.listCodeFiles(user.githubAccessToken, owner, repo, {
      maxFiles: 15,
    });
    review.baseBranch = branch;
    review.filesReviewed = files.map((f) => ({ path: f.path, language: f.language }));
    await review.save();

    if (files.length === 0) {
      sendSSE(res, "error", { message: "No reviewable code files were found in this repository." });
      review.status = "failed";
      review.messages.push({ role: "assistant", content: "No reviewable code files were found in this repository." });
      await review.save();
      return res.end();
    }

    sendSSE(res, "progress", {
      step: "select-files",
      message: `Selected ${files.length} file(s) for review.`,
      status: "active",
    });

    const batches = chunkArray(files, BATCH_SIZE);
    const combinedSections = [];

    for (let i = 0; i < batches.length; i++) {
      sendSSE(res, "progress", {
        step: `batch-${i}`,
        message: `Analyzing batch ${i + 1} of ${batches.length} (${batches[i].map((f) => f.path).join(", ")})...`,
        batchIndex: i,
        totalBatches: batches.length,
        status: "active",
      });

      const filesWithContent = await Promise.all(
        batches[i].map(async (f) => ({
          ...f,
          content: await githubService.getFileContent(user.githubAccessToken, owner, repo, f.path, branch),
        }))
      );

      const { content, usage } = await aiService.reviewFileBatch(filesWithContent, {
        repoName: `${owner}/${repo}`,
        reviewType,
      });

      usageService.logUsage(user._id, "review.analyze", usage);
      review.tokensUsed += usage.total_tokens || 0;

      combinedSections.push(content);

      sendSSE(res, "chunk", { batchIndex: i, totalBatches: batches.length, content });
    }

    const fullMarkdown = combinedSections.join("\n\n---\n\n");
    review.messages.push({ role: "assistant", content: fullMarkdown });
    review.issuesFoundCount = (fullMarkdown.match(/\*\*(Critical|High|Medium|Low)\*\*/gi) || []).length;
    review.status = "completed";
    await review.save();

    user.reviewCount += 1;
    await user.save();

    sendSSE(res, "complete", { reviewId: review._id });
    res.end();
  } catch (err) {
    if (review) {
      review.status = "failed";
      review.messages.push({ role: "assistant", content: `Analysis failed: ${err.message}` });
      await review.save().catch(() => {});
    }
    sendSSE(res, "error", { message: err.message || "Analysis failed unexpectedly." });
    res.end();
  } finally {
    req.removeListener("close", cleanupOnClose);
  }
});

/**
 * POST /api/review/chat
 * body: { reviewId, message }
 */
const chat = asyncHandler(async (req, res) => {
  const { reviewId, message } = req.body;

  const review = await Review.findOne({ _id: reviewId, user: req.user._id });
  if (!review) throw ApiError.notFound("Review not found.");
  if (review.status !== "completed") {
    throw ApiError.badRequest("This review is not ready for follow-up questions yet.");
  }

  const reviewContext = review.messages.find((m) => m.role === "assistant")?.content || "";
  const priorMessages = review.messages.filter((m) => m.role !== "system");

  review.messages.push({ role: "user", content: message });

  const { content, usage } = await aiService.continueReviewChat(reviewContext, priorMessages, message);
  usageService.logUsage(req.user._id, "review.chat", usage);

  review.messages.push({ role: "assistant", content });
  review.tokensUsed += usage.total_tokens || 0;
  await review.save();

  res.status(200).json({ messages: review.messages });
});

/**
 * POST /api/review/apply-fixes
 * body: { reviewId }
 */
const applyFixes = asyncHandler(async (req, res) => {
  const { reviewId } = req.body;

  const review = await Review.findOne({ _id: reviewId, user: req.user._id });
  if (!review) throw ApiError.notFound("Review not found.");
  if (review.status !== "completed") {
    throw ApiError.badRequest("This review must be completed before fixes can be applied.");
  }
  if (review.prUrl) {
    throw ApiError.conflict("Fixes have already been applied for this review.");
  }

  const user = await User.findById(req.user._id).select("+githubAccessToken");
  if (!user.githubConnected || !user.githubAccessToken) {
    throw ApiError.badRequest("GitHub account is not connected.");
  }

  const reviewMarkdown = review.messages.find((m) => m.role === "assistant")?.content || "";

  const filesWithContent = await Promise.all(
    review.filesReviewed.map(async (f) => ({
      ...f.toObject(),
      content: await githubService.getFileContent(
        user.githubAccessToken,
        review.repositoryOwner,
        review.repositoryName,
        f.path,
        review.baseBranch
      ),
    }))
  );

  const fixedFiles = await aiService.generateFixedFiles(filesWithContent, reviewMarkdown);
  usageService.logUsage(req.user._id, "review.apply-fixes", {});

  const { prUrl, branch } = await githubService.createFixPullRequest(
    user.githubAccessToken,
    review.repositoryOwner,
    review.repositoryName,
    fixedFiles,
    {
      title: `AI fixes for ${review.repositoryName} (BunoBagera review #${review._id})`,
      body: `Automated fixes generated by BunoBagera based on the AI code review.\n\nReview ID: ${review._id}`,
    }
  );

  review.prUrl = prUrl;
  review.prBranch = branch;
  await review.save();

  res.status(200).json({ prUrl, branch });
});

/**
 * GET /api/review/rate-limits
 */
const rateLimits = asyncHandler(async (req, res) => {
  const stats = await usageService.getRateLimitStats(req.user._id);
  res.status(200).json(stats);
});

/**
 * POST /api/review/scan-snippet
 * body: { code, language, reviewType }
 * Powers the "New Review" paste-code editor.
 */
const scanSnippet = asyncHandler(async (req, res) => {
  const { code, language, reviewType = "full", focusAreas } = req.body;

  const issues = await aiService.reviewSnippet(code, language, reviewType, focusAreas);
  usageService.logUsage(req.user._id, "review.scan-snippet", {});

  await Review.create({
    user: req.user._id,
    repositoryOwner: "local",
    repositoryName: "snippet",
    reviewType: "snippet",
    primaryLanguage: language || "Unknown",
    status: "completed",
    issues,
    issuesFoundCount: issues.length,
    messages: [
      { role: "system", content: `Snippet scan (${language}, ${reviewType})` },
      { role: "assistant", content: JSON.stringify(issues) },
    ],
  });

  res.status(200).json({ issues });
});

module.exports = {
  listReviews,
  getReview,
  analyzeStream,
  chat,
  applyFixes,
  rateLimits,
  scanSnippet,
};