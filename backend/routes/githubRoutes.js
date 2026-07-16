const express = require("express");
const router = express.Router();

const githubController = require("../controllers/githubController");
const { protect } = require("../middleware/auth");
const validate = require("../middleware/validate");
const { aiLimiter } = require("../middleware/rateLimiter");
const { githubConnectValidator } = require("../validators/reviewValidators");

/**
 * @openapi
 * /api/github/connect:
 *   post:
 *     summary: Link a GitHub account to the current user
 *     tags: [GitHub]
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [code]
 *             properties:
 *               code: { type: string }
 *     responses:
 *       200: { description: GitHub connected }
 */
router.post("/connect", protect, githubConnectValidator, validate, githubController.connectGithub);

/**
 * @openapi
 * /api/github/disconnect:
 *   delete:
 *     summary: Unlink the GitHub account from the current user
 *     tags: [GitHub]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: GitHub disconnected }
 */
router.delete("/disconnect", protect, githubController.disconnectGithub);

/**
 * @openapi
 * /api/github/repos:
 *   get:
 *     summary: List the current user's GitHub repositories
 *     tags: [GitHub]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Array of repositories }
 */
router.get("/repos", protect, githubController.getRepos);

/**
 * @openapi
 * /api/github/profile-analysis:
 *   get:
 *     summary: AI-generated GitHub developer profile analysis (cached 24h unless force=true)
 *     tags: [GitHub]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: query
 *         name: force
 *         schema: { type: string, enum: ["true", "false"] }
 *     responses:
 *       200: { description: Developer persona analysis }
 */
router.get("/profile-analysis", protect, aiLimiter, githubController.getProfileAnalysis);

module.exports = router;
