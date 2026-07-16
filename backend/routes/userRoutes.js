const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const { protect, authorize } = require("../middleware/auth");
const validate = require("../middleware/validate");
const { uploadAvatar } = require("../middleware/upload");
const { updateUserValidator, updateNotificationsValidator } = require("../validators/userValidators");

/**
 * @openapi
 * /api/users/me:
 *   get:
 *     summary: Get the current authenticated user
 *     tags: [Users]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Current user }
 */
router.get("/me", protect, userController.getMe);

/**
 * @openapi
 * /api/users/me/notifications:
 *   put:
 *     summary: Update notification preferences
 *     tags: [Users]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Preferences updated }
 */
router.put(
  "/me/notifications",
  protect,
  updateNotificationsValidator,
  validate,
  userController.updateNotificationPreferences
);

/**
 * @openapi
 * /api/users/avatar:
 *   post:
 *     summary: Upload a new avatar image
 *     tags: [Users]
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               avatar: { type: string, format: binary }
 *     responses:
 *       200: { description: Avatar updated }
 */
router.post("/avatar", protect, uploadAvatar.single("avatar"), userController.uploadAvatar);

/**
 * @openapi
 * /api/users:
 *   get:
 *     summary: List all users (admin only)
 *     tags: [Users]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Paginated user list }
 */
router.get("/", protect, authorize("admin"), userController.listUsers);

/**
 * @openapi
 * /api/users/{id}:
 *   put:
 *     summary: Update a user's profile
 *     tags: [Users]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: User updated }
 *   delete:
 *     summary: Delete a user account
 *     tags: [Users]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: User deleted }
 */
router.put("/:id", protect, updateUserValidator, validate, userController.updateUser);
router.delete("/:id", protect, userController.deleteUser);

module.exports = router;
