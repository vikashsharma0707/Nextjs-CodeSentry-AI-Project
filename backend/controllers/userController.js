const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const User = require("../models/User");
const cloudinary = require("../config/cloudinary");
const { mapUserForFrontend } = require("./userController.helpers");

/**
 * GET /api/users/me
 * Matches Strapi's /api/users/me shape — the frontend reads this directly
 * (not wrapped in { data }).
 */
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(mapUserForFrontend(req.user));
});

/**
 * PUT /api/users/:id
 * body: { username, email }
 */
const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (String(req.user._id) !== id && req.user.role !== "admin") {
    throw ApiError.forbidden("You can only update your own profile.");
  }

  const user = await User.findById(id);
  if (!user) throw ApiError.notFound("User not found.");

  const { username, email } = req.body;
  if (username !== undefined) user.username = username;
  if (email !== undefined && email.toLowerCase() !== user.email) {
    const emailTaken = await User.findOne({ email: email.toLowerCase(), _id: { $ne: user._id } });
    if (emailTaken) throw ApiError.conflict("This email is already in use.");
    user.email = email;
    user.isEmailVerified = false;
  }

  await user.save();

  res.status(200).json(mapUserForFrontend(user));
});

/**
 * DELETE /api/users/:id (admin, or self-delete)
 */
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (String(req.user._id) !== id && req.user.role !== "admin") {
    throw ApiError.forbidden("You can only delete your own account.");
  }

  const user = await User.findByIdAndDelete(id);
  if (!user) throw ApiError.notFound("User not found.");

  res.status(200).json({ message: "Account deleted successfully." });
});

/**
 * POST /api/users/avatar (multipart/form-data, field name: "avatar")
 */
const uploadAvatar = asyncHandler(async (req, res) => {
  if (!req.file) throw ApiError.badRequest("No image file uploaded.");

  const user = await User.findById(req.user._id).select("+avatarPublicId");

  if (user.avatarPublicId) {
    cloudinary.uploader.destroy(user.avatarPublicId).catch(() => {});
  }

  user.avatarUrl = req.file.path; // secure_url provided by multer-storage-cloudinary
  user.avatarPublicId = req.file.filename; // public_id
  await user.save();

  res.status(200).json(mapUserForFrontend(user));
});

/**
 * PUT /api/users/me/notifications
 * body: { emailAlerts?, prAlerts?, weeklyDigest? }
 */
const updateNotificationPreferences = asyncHandler(async (req, res) => {
  const { emailAlerts, prAlerts, weeklyDigest } = req.body;
  const user = req.user;

  if (emailAlerts !== undefined) user.notificationPreferences.emailAlerts = emailAlerts;
  if (prAlerts !== undefined) user.notificationPreferences.prAlerts = prAlerts;
  if (weeklyDigest !== undefined) user.notificationPreferences.weeklyDigest = weeklyDigest;

  await user.save();
  res.status(200).json(mapUserForFrontend(user));
});

/**
 * GET /api/users (admin) — list all users, paginated
 */
const listUsers = asyncHandler(async (req, res) => {
  const { parsePagination } = require("../utils/paginate");
  const { page, pageSize, skip } = parsePagination(req.query);

  const [users, total] = await Promise.all([
    User.find().sort({ createdAt: -1 }).skip(skip).limit(pageSize),
    User.countDocuments(),
  ]);

  res.status(200).json({
    data: users.map(mapUserForFrontend),
    meta: { pagination: { page, pageSize, pageCount: Math.ceil(total / pageSize) || 1, total } },
  });
});

module.exports = {
  getMe,
  updateUser,
  deleteUser,
  uploadAvatar,
  updateNotificationPreferences,
  listUsers,
};
