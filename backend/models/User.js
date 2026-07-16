const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const PLAN_LIMITS = {
  free: 50,
  pro: 999,
  enterprise: 9999,
};

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      minlength: [2, "Username must be at least 2 characters"],
      maxlength: [50, "Username must be under 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"],
      index: true,
    },
    password: {
      type: String,
      minlength: [8, "Password must be at least 8 characters"],
      select: false,
      // Not required: GitHub-only accounts have no local password
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    plan: {
      type: String,
      enum: ["free", "pro", "enterprise"],
      default: "free",
    },
    reviewCount: {
      type: Number,
      default: 0,
      min: 0,
    },
    avatarUrl: {
      type: String,
      default: "",
    },
    avatarPublicId: {
      type: String,
      default: "",
      select: false,
    },

    // ── GitHub OAuth ──────────────────────────────────────────────────────
    githubId: {
      type: String,
      unique: true,
      sparse: true,
      index: true,
    },
    githubUsername: {
      type: String,
      default: "",
    },
    githubAccessToken: {
      type: String,
      select: false, // encrypted at rest, never returned in queries by default
    },
    githubConnected: {
      type: Boolean,
      default: false,
    },
    githubTokenScope: {
      type: String,
      default: "",
    },

    // ── Email verification ───────────────────────────────────────────────
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    emailVerificationToken: { type: String, select: false },
    emailVerificationExpires: { type: Date, select: false },

    // ── Password reset ───────────────────────────────────────────────────
    resetPasswordToken: { type: String, select: false },
    resetPasswordExpires: { type: Date, select: false },

    // ── Refresh tokens (rotation-friendly, allow multiple devices) ───────
    refreshTokens: {
      type: [String],
      default: [],
      select: false,
    },

    // ── Notification preferences ─────────────────────────────────────────
    notificationPreferences: {
      emailAlerts: { type: Boolean, default: true },
      prAlerts: { type: Boolean, default: true },
      weeklyDigest: { type: Boolean, default: false },
    },

    lastLoginAt: Date,
  },
  { timestamps: true }
);

userSchema.index({ email: 1, githubId: 1 });

// ── Virtuals ─────────────────────────────────────────────────────────────
userSchema.virtual("reviewsLimit").get(function () {
  return PLAN_LIMITS[this.plan] ?? PLAN_LIMITS.free;
});

userSchema.set("toJSON", { virtuals: true });
userSchema.set("toObject", { virtuals: true });

// ── Middleware: hash password before save ───────────────────────────────
userSchema.pre("save", async function (next) {
  if (!this.isModified("password") || !this.password) return next();
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// ── Instance methods ─────────────────────────────────────────────────────
userSchema.methods.comparePassword = async function (candidate) {
  if (!this.password) return false;
  return bcrypt.compare(candidate, this.password);
};

userSchema.methods.generateEmailVerificationToken = function () {
  const token = crypto.randomBytes(32).toString("hex");
  this.emailVerificationToken = crypto.createHash("sha256").update(token).digest("hex");
  this.emailVerificationExpires = Date.now() + 24 * 60 * 60 * 1000; // 24h
  return token;
};

userSchema.methods.generatePasswordResetToken = function () {
  const token = crypto.randomBytes(32).toString("hex");
  this.resetPasswordToken = crypto.createHash("sha256").update(token).digest("hex");
  this.resetPasswordExpires = Date.now() + 60 * 60 * 1000; // 1h
  return token;
};

userSchema.methods.toSafeObject = function () {
  return {
    id: this._id,
    username: this.username,
    email: this.email,
    role: this.role,
    plan: this.plan,
    reviewCount: this.reviewCount,
    reviewsLimit: this.reviewsLimit,
    avatarUrl: this.avatarUrl,
    githubUsername: this.githubUsername,
    githubConnected: this.githubConnected,
    isEmailVerified: this.isEmailVerified,
    notificationPreferences: this.notificationPreferences,
    createdAt: this.createdAt,
  };
};

module.exports = mongoose.model("User", userSchema);
module.exports.PLAN_LIMITS = PLAN_LIMITS;
