const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const { verifyAccessToken } = require("../utils/generateToken");
const User = require("../models/User");

/**
 * Extracts the bearer token from the Authorization header, OR (for SSE /
 * EventSource requests which cannot set custom headers) from a `token`
 * query parameter — mirrors what the frontend's analyze-stream call does.
 */
function extractToken(req) {
  const header = req.headers.authorization;
  if (header && header.startsWith("Bearer ")) {
    return header.split(" ")[1];
  }
  if (req.query && req.query.token) {
    return req.query.token;
  }
  return null;
}

const protect = asyncHandler(async (req, res, next) => {
  const token = extractToken(req);
  if (!token) {
    throw ApiError.unauthorized("Not authenticated. No token provided.");
  }

  let decoded;
  try {
    decoded = verifyAccessToken(token);
  } catch (err) {
    throw ApiError.unauthorized("Invalid or expired token.");
  }

  const user = await User.findById(decoded.id);
  if (!user) {
    throw ApiError.unauthorized("User belonging to this token no longer exists.");
  }

  req.user = user;
  next();
});

/**
 * Restricts access to the given roles. Usage: authorize("admin")
 */
function authorize(...roles) {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return next(ApiError.forbidden("You do not have permission to perform this action."));
    }
    next();
  };
}

module.exports = { protect, authorize, extractToken };
