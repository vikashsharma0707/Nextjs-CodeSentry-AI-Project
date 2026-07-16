const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const { protect } = require("../middleware/auth");
const validate = require("../middleware/validate");
const { authLimiter } = require("../middleware/rateLimiter");
const {
  registerValidator,
  loginValidator,
  githubAuthValidator,
  forgotPasswordValidator,
  resetPasswordValidator,
  verifyEmailValidator,
  refreshTokenValidator,
} = require("../validators/authValidators");

/**
 * @openapi
 * /api/auth/local/register:
 *   post:
 *     summary: Register a new local account
 *     tags: [Auth]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [username, email, password]
 *             properties:
 *               username: { type: string }
 *               email: { type: string }
 *               password: { type: string }
 *     responses:
 *       201: { description: Account created }
 */
router.post("/local/register", authLimiter, registerValidator, validate, authController.register);

/**
 * @openapi
 * /api/auth/local:
 *   post:
 *     summary: Log in with email + password
 *     tags: [Auth]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [identifier, password]
 *             properties:
 *               identifier: { type: string, description: "Email address" }
 *               password: { type: string }
 *     responses:
 *       200: { description: Logged in }
 */
router.post("/local", authLimiter, loginValidator, validate, authController.login);

/**
 * @openapi
 * /api/auth/github:
 *   post:
 *     summary: Log in or sign up via GitHub OAuth code
 *     tags: [Auth]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [code]
 *             properties:
 *               code: { type: string }
 *     responses:
 *       200: { description: Authenticated via GitHub }
 */
router.post("/github", authLimiter, githubAuthValidator, validate, authController.githubAuth);

/**
 * @openapi
 * /api/auth/refresh:
 *   post:
 *     summary: Exchange a refresh token for a new access token
 *     tags: [Auth]
 *     responses:
 *       200: { description: New access token issued }
 */
router.post("/refresh", refreshTokenValidator, validate, authController.refresh);

/**
 * @openapi
 * /api/auth/logout:
 *   post:
 *     summary: Log out (invalidate refresh token)
 *     tags: [Auth]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Logged out }
 */
router.post("/logout", protect, authController.logout);

/**
 * @openapi
 * /api/auth/forgot-password:
 *   post:
 *     summary: Request a password reset email
 *     tags: [Auth]
 *     responses:
 *       200: { description: Reset email sent if account exists }
 */
router.post("/forgot-password", authLimiter, forgotPasswordValidator, validate, authController.forgotPassword);

/**
 * @openapi
 * /api/auth/reset-password:
 *   post:
 *     summary: Reset password using a reset token
 *     tags: [Auth]
 *     responses:
 *       200: { description: Password reset }
 */
router.post("/reset-password", authLimiter, resetPasswordValidator, validate, authController.resetPassword);

/**
 * @openapi
 * /api/auth/verify-email:
 *   post:
 *     summary: Verify email using a verification token
 *     tags: [Auth]
 *     responses:
 *       200: { description: Email verified }
 */
router.post("/verify-email", verifyEmailValidator, validate, authController.verifyEmail);

module.exports = router;
