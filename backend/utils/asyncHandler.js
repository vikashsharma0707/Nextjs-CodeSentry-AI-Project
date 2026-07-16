/**
 * Wraps an async route/controller function so any rejected promise
 * is forwarded to Express's error-handling middleware.
 * @param {Function} fn
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;
