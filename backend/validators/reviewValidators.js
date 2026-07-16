const { body, query, param } = require("express-validator");

const githubConnectValidator = [
  body("code").trim().notEmpty().withMessage("GitHub authorization code is required"),
];

const analyzeStreamValidator = [
  query("owner").trim().notEmpty().withMessage("owner is required"),
  query("repo").trim().notEmpty().withMessage("repo is required"),
];

const reviewChatValidator = [
  body("reviewId").notEmpty().withMessage("reviewId is required").isMongoId().withMessage("Invalid reviewId"),
  body("message").trim().notEmpty().withMessage("message is required").isLength({ max: 4000 }),
];

const applyFixesValidator = [
  body("reviewId").notEmpty().withMessage("reviewId is required").isMongoId().withMessage("Invalid reviewId"),
];

const reviewIdParamValidator = [param("id").isMongoId().withMessage("Invalid review id")];

const scanSnippetValidator = [
  body("code").trim().notEmpty().withMessage("code is required").isLength({ max: 20000 }),
  body("language").trim().notEmpty().withMessage("language is required"),
  body("reviewType").optional().isIn(["full", "security", "style", "performance"]),
];

module.exports = {
  githubConnectValidator,
  analyzeStreamValidator,
  reviewChatValidator,
  applyFixesValidator,
  reviewIdParamValidator,
  scanSnippetValidator,
};
