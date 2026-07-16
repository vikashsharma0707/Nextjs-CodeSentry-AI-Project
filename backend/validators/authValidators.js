const { body } = require("express-validator");

const registerValidator = [
  body("username")
    .trim()
    .notEmpty().withMessage("Username is required")
    .isLength({ min: 2, max: 50 }).withMessage("Username must be 2-50 characters"),
  body("email")
    .trim()
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Must be a valid email")
    .normalizeEmail(),
  body("password")
    .notEmpty().withMessage("Password is required")
    .isLength({ min: 8 }).withMessage("Password must be at least 8 characters"),
];

const loginValidator = [
  body("identifier")
    .trim()
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Must be a valid email"),
  body("password").notEmpty().withMessage("Password is required"),
];

const githubAuthValidator = [
  body("code").trim().notEmpty().withMessage("GitHub authorization code is required"),
];

const forgotPasswordValidator = [
  body("email").trim().notEmpty().isEmail().withMessage("Must be a valid email").normalizeEmail(),
];

const resetPasswordValidator = [
  body("token").trim().notEmpty().withMessage("Reset token is required"),
  body("password")
    .notEmpty().withMessage("Password is required")
    .isLength({ min: 8 }).withMessage("Password must be at least 8 characters"),
];

const verifyEmailValidator = [
  body("token").trim().notEmpty().withMessage("Verification token is required"),
];

const refreshTokenValidator = [
  body("refreshToken").trim().notEmpty().withMessage("Refresh token is required"),
];

module.exports = {
  registerValidator,
  loginValidator,
  githubAuthValidator,
  forgotPasswordValidator,
  resetPasswordValidator,
  verifyEmailValidator,
  refreshTokenValidator,
};
