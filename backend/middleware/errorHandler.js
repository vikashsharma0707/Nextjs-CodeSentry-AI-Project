const ApiError = require("../utils/ApiError");
const logger = require("../utils/logger");
const env = require("../config/env");

function notFound(req, res, next) {
  next(ApiError.notFound(`Route not found — ${req.method} ${req.originalUrl}`));
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  let error = err;

  // Mongoose bad ObjectId
  if (err.name === "CastError") {
    error = ApiError.badRequest(`Invalid value for field '${err.path}': ${err.value}`);
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((val) => val.message);
    error = ApiError.badRequest("Validation failed", messages);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue || {})[0] || "field";
    error = ApiError.conflict(`${field} already exists.`);
  }

  // JWT errors
  if (err.name === "JsonWebTokenError") {
    error = ApiError.unauthorized("Invalid token.");
  }
  if (err.name === "TokenExpiredError") {
    error = ApiError.unauthorized("Token has expired.");
  }

  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal server error";

  if (statusCode >= 500) {
    logger.error(`${req.method} ${req.originalUrl} -> ${statusCode} ${message}\n${err.stack}`);
  } else {
    logger.warn(`${req.method} ${req.originalUrl} -> ${statusCode} ${message}`);
  }

  res.status(statusCode).json({
    error: {
      status: statusCode,
      message,
      details: error.details || undefined,
      stack: env.NODE_ENV === "development" ? err.stack : undefined,
    },
  });
}

module.exports = { notFound, errorHandler };
