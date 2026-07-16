const { body, param } = require("express-validator");

const updateUserValidator = [
  param("id").isMongoId().withMessage("Invalid user id"),
  body("username").optional().trim().isLength({ min: 2, max: 50 }).withMessage("Username must be 2-50 characters"),
  body("email").optional().trim().isEmail().withMessage("Must be a valid email").normalizeEmail(),
];

const updateNotificationsValidator = [
  body("emailAlerts").optional().isBoolean(),
  body("prAlerts").optional().isBoolean(),
  body("weeklyDigest").optional().isBoolean(),
];

module.exports = { updateUserValidator, updateNotificationsValidator };
