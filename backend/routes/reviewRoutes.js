const express = require("express");
const reviewsRouter = express.Router(); // mounted at /api/reviews
const reviewRouter = express.Router(); // mounted at /api/review

const reviewController = require("../controllers/reviewController");
const { protect } = require("../middleware/auth");
const validate = require("../middleware/validate");
const { aiLimiter } = require("../middleware/rateLimiter");
const {
  analyzeStreamValidator,
  reviewChatValidator,
  applyFixesValidator,
  reviewIdParamValidator,
  scanSnippetValidator,
} = require("../validators/reviewValidators");

// ─────────────────────────────────────────────────────────────────────────
// /api/reviews — history / CRUD (Strapi-style { data, meta } responses)
// ─────────────────────────────────────────────────────────────────────────

/**
 * @openapi
 * /api/reviews:
 *   get:
 *     summary: List the current user's code reviews (paginated, sortable)
 *     tags: [Reviews]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: query
 *         name: sort
 *         schema: { type: string, example: "createdAt:desc" }
 *     responses:
 *       200: { description: Paginated review list }
 */
reviewsRouter.get("/", protect, reviewController.listReviews);

/**
 * @openapi
 * /api/reviews/{id}:
 *   get:
 *     summary: Get a single review, including its chat history
 *     tags: [Reviews]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Review detail }
 */
reviewsRouter.get("/:id", protect, reviewIdParamValidator, validate, reviewController.getReview);

// ─────────────────────────────────────────────────────────────────────────
// /api/review — AI-powered actions
// ─────────────────────────────────────────────────────────────────────────

/**
 * @openapi
 * /api/review/analyze-stream:
 *   get:
 *     summary: >
 *       Start an AI code review of a GitHub repository, streamed via
 *       Server-Sent Events (progress, chunk, complete, error).
 *       The JWT is passed as ?token= because EventSource cannot set headers.
 *     tags: [Reviews]
 *     parameters:
 *       - in: query
 *         name: owner
 *         required: true
 *         schema: { type: string }
 *       - in: query
 *         name: repo
 *         required: true
 *         schema: { type: string }
 *       - in: query
 *         name: token
 *         required: true
 *         schema: { type: string }
 *       - in: query
 *         name: reviewType
 *         schema: { type: string, enum: [full, security, style, performance] }
 *     responses:
 *       200: { description: "text/event-stream of review progress/results" }
 */
reviewRouter.get("/analyze-stream", protect, analyzeStreamValidator, validate, reviewController.analyzeStream);

/**
 * @openapi
 * /api/review/chat:
 *   post:
 *     summary: Continue the conversation about a completed review
 *     tags: [Reviews]
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [reviewId, message]
 *             properties:
 *               reviewId: { type: string }
 *               message: { type: string }
 *     responses:
 *       200: { description: Updated message list }
 */
reviewRouter.post("/chat", protect, aiLimiter, reviewChatValidator, validate, reviewController.chat);

/**
 * @openapi
 * /api/review/apply-fixes:
 *   post:
 *     summary: Generate AI fixes for a completed review and open a GitHub pull request
 *     tags: [Reviews]
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [reviewId]
 *             properties:
 *               reviewId: { type: string }
 *     responses:
 *       200: { description: Pull request created }
 */
reviewRouter.post("/apply-fixes", protect, aiLimiter, applyFixesValidator, validate, reviewController.applyFixes);

/**
 * @openapi
 * /api/review/rate-limits:
 *   get:
 *     summary: Current AI model usage/rate-limit stats for the dashboard widget
 *     tags: [Reviews]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Rate limit + historical usage data }
 */
reviewRouter.get("/rate-limits", protect, reviewController.rateLimits);

/**
 * @openapi
 * /api/review/scan-snippet:
 *   post:
 *     summary: AI-review a pasted code snippet (powers the "New Review" editor)
 *     tags: [Reviews]
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [code, language]
 *             properties:
 *               code: { type: string }
 *               language: { type: string }
 *               reviewType: { type: string, enum: [full, security, style, performance] }
 *     responses:
 *       200: { description: List of detected issues }
 */
reviewRouter.post("/scan-snippet", protect, aiLimiter, scanSnippetValidator, validate, reviewController.scanSnippet);

module.exports = { reviewsRouter, reviewRouter };
