const mongoose = require("mongoose");

/**
 * One document per AI call, used to derive rolling RPM/TPM/RPD metrics
 * and the historical chart shown on the dashboard's Rate Limits widget.
 * A TTL index prunes records after 7 days so the collection stays small.
 */
const usageStatSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    model: {
      type: String,
      required: true,
    },
    endpoint: {
      type: String, // e.g. "review.analyze", "review.chat", "review.apply-fixes", "github.profile-analysis"
      required: true,
    },
    promptTokens: { type: Number, default: 0 },
    completionTokens: { type: Number, default: 0 },
    totalTokens: { type: Number, default: 0 },
    createdAt: {
      type: Date,
      default: Date.now,
      index: true,
      expires: 60 * 60 * 24 * 7, // TTL: 7 days
    },
  },
  { timestamps: false }
);

usageStatSchema.index({ user: 1, createdAt: -1 });

module.exports = mongoose.model("UsageStat", usageStatSchema);
