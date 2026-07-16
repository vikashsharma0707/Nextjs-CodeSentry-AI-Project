const crypto = require("crypto");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const User = require("../models/User");
const {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} = require("../utils/generateToken");
const githubService = require("../services/githubService");
const emailService = require("../services/emailService");
const { mapUserForFrontend } = require("./userController.helpers");

async function issueTokens(user) {
  const accessToken = signAccessToken(user._id);
  const refreshToken = signRefreshToken(user._id);

  user.refreshTokens = [...(user.refreshTokens || []), refreshToken].slice(-5); // keep last 5 devices
  user.lastLoginAt = new Date();
  await user.save();

  return { accessToken, refreshToken };
}

/**
 * POST /api/auth/local/register
 * body: { username, email, password }
 */
const register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  const existing = await User.findOne({ email: email.toLowerCase() });
  if (existing) {
    throw ApiError.conflict("An account with this email already exists.");
  }

  const user = await User.create({ username, email, password });
  const verificationToken = user.generateEmailVerificationToken();
  await user.save();

  emailService.sendVerificationEmail(user, verificationToken).catch(() => {});

  const { accessToken } = await issueTokens(user);

  res.status(201).json({
    jwt: accessToken,
    user: mapUserForFrontend(user),
  });
});

/**
 * POST /api/auth/local
 * body: { identifier, password }
 */
const login = asyncHandler(async (req, res) => {
  const { identifier, password } = req.body;

  const user = await User.findOne({ email: identifier.toLowerCase() }).select("+password");
  if (!user || !(await user.comparePassword(password))) {
    throw ApiError.unauthorized("Invalid email or password.");
  }

  const { accessToken } = await issueTokens(user);

  res.status(200).json({
    jwt: accessToken,
    user: mapUserForFrontend(user),
  });
});

/**
 * POST /api/auth/github
 * body: { code }
 * Handles both login (existing GitHub-linked user) and signup
 * (first time a GitHub account is used).
 */
const githubAuth = asyncHandler(async (req, res) => {
  const { code } = req.body;

  const { accessToken: githubToken, scope } = await githubService.exchangeCodeForToken(code);
  const ghUser = await githubService.getAuthenticatedGithubUser(githubToken);

  let user = await User.findOne({ githubId: String(ghUser.id) });

  if (!user) {
    // Try linking by email if GitHub exposes a verified email
    if (ghUser.email) {
      user = await User.findOne({ email: ghUser.email.toLowerCase() });
    }
  }

  if (!user) {
    user = await User.create({
      username: ghUser.login,
      email: ghUser.email || `${ghUser.login}-${ghUser.id}@users.noreply.github.com`,
      githubId: String(ghUser.id),
      githubUsername: ghUser.login,
      githubAccessToken: githubToken,
      githubConnected: true,
      githubTokenScope: scope,
      isEmailVerified: !!ghUser.email,
      avatarUrl: ghUser.avatar_url || "",
    });
  } else {
    user.githubId = String(ghUser.id);
    user.githubUsername = ghUser.login;
    user.githubAccessToken = githubToken;
    user.githubConnected = true;
    user.githubTokenScope = scope;
    if (!user.avatarUrl) user.avatarUrl = ghUser.avatar_url || "";
  }

  const { accessToken } = await issueTokens(user);

  res.status(200).json({
    jwt: accessToken,
    user: mapUserForFrontend(user),
  });
});

/**
 * POST /api/auth/logout
 * body: { refreshToken } (optional)
 */
const logout = asyncHandler(async (req, res) => {
  const { refreshToken } = req.body;

  if (refreshToken && req.user) {
    req.user.refreshTokens = (req.user.refreshTokens || []).filter((t) => t !== refreshToken);
    await req.user.save();
  }

  res.status(200).json({ message: "Logged out successfully." });
});

/**
 * POST /api/auth/refresh
 * body: { refreshToken }
 */
const refresh = asyncHandler(async (req, res) => {
  const { refreshToken } = req.body;

  let decoded;
  try {
    decoded = verifyRefreshToken(refreshToken);
  } catch (err) {
    throw ApiError.unauthorized("Invalid or expired refresh token.");
  }

  const user = await User.findById(decoded.id).select("+refreshTokens");
  if (!user || !user.refreshTokens.includes(refreshToken)) {
    throw ApiError.unauthorized("Refresh token not recognized. Please log in again.");
  }

  // Rotate refresh token
  user.refreshTokens = user.refreshTokens.filter((t) => t !== refreshToken);
  const { accessToken, refreshToken: newRefreshToken } = await issueTokens(user);

  res.status(200).json({ jwt: accessToken, refreshToken: newRefreshToken });
});

/**
 * POST /api/auth/forgot-password
 * body: { email }
 */
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email.toLowerCase() });

  // Always respond 200 to avoid leaking which emails are registered
  if (!user) {
    return res.status(200).json({
      message: "If an account with that email exists, a reset link has been sent.",
    });
  }

  const token = user.generatePasswordResetToken();
  await user.save();

  await emailService.sendPasswordResetEmail(user, token);

  res.status(200).json({
    message: "If an account with that email exists, a reset link has been sent.",
  });
});

/**
 * POST /api/auth/reset-password
 * body: { token, password }
 */
const resetPassword = asyncHandler(async (req, res) => {
  const { token, password } = req.body;
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  const user = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpires: { $gt: Date.now() },
  }).select("+resetPasswordToken +resetPasswordExpires");

  if (!user) {
    throw ApiError.badRequest("Password reset token is invalid or has expired.");
  }

  user.password = password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  user.refreshTokens = []; // force re-login everywhere
  await user.save();

  res.status(200).json({ message: "Password has been reset successfully." });
});

/**
 * POST /api/auth/verify-email
 * body: { token }
 */
const verifyEmail = asyncHandler(async (req, res) => {
  const { token } = req.body;
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  const user = await User.findOne({
    emailVerificationToken: hashedToken,
    emailVerificationExpires: { $gt: Date.now() },
  }).select("+emailVerificationToken +emailVerificationExpires");

  if (!user) {
    throw ApiError.badRequest("Email verification token is invalid or has expired.");
  }

  user.isEmailVerified = true;
  user.emailVerificationToken = undefined;
  user.emailVerificationExpires = undefined;
  await user.save();

  res.status(200).json({ message: "Email verified successfully." });
});

module.exports = {
  register,
  login,
  githubAuth,
  logout,
  refresh,
  forgotPassword,
  resetPassword,
  verifyEmail,
};
