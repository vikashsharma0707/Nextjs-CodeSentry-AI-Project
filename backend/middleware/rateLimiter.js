const rateLimit = require("express-rate-limit");
const env = require("../config/env");

/** General API limiter, applied globally in app.js */
const apiLimiter = rateLimit({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  max: env.RATE_LIMIT_MAX,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: { status: 429, message: "Too many requests, please try again later." } },
});

/** Tighter limiter for auth endpoints (brute-force protection) */
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: { status: 429, message: "Too many authentication attempts. Please try again later." } },
});

/** Limiter for expensive AI-backed endpoints */
const aiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: { status: 429, message: "AI request rate limit exceeded. Slow down." } },
});

module.exports = { apiLimiter, authLimiter, aiLimiter };
