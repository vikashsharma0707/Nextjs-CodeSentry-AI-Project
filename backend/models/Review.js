const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["system", "user", "assistant"],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, _id: false }
);

const issueSchema = new mongoose.Schema(
  {
    file: String,
    line: Number,
    severity: {
      type: String,
      enum: ["critical", "high", "medium", "low"],
    },
    type: String,
    description: String,
    snippet: String,
  },
  { _id: false }
);

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    repositoryOwner: {
      type: String,
      required: true,
      trim: true,
    },
    repositoryName: {
      type: String,
      required: true,
      trim: true,
    },
    reviewType: {
      type: String,
      enum: ["full", "security", "style", "performance", "snippet"],
      default: "full",
    },
    primaryLanguage: {
      type: String,
      default: "Unknown",
    },
    filesReviewed: [
      {
        path: String,
        language: String,
      },
    ],
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
      index: true,
    },
    issues: [issueSchema],
    issuesFoundCount: {
      type: Number,
      default: 0,
    },
    messages: {
      type: [messageSchema],
      default: [],
    },
    baseBranch: {
      type: String,
      default: null,
    },
    prUrl: {
      type: String,
      default: null,
    },
    prBranch: {
      type: String,
      default: null,
    },
    tokensUsed: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

reviewSchema.index({ user: 1, createdAt: -1 });
reviewSchema.index({ user: 1, repositoryOwner: 1, repositoryName: 1 });

// Populate a lightweight user reference by default when needed
reviewSchema.statics.findForUser = function (userId, filter = {}) {
  return this.find({ user: userId, ...filter });
};

reviewSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Review", reviewSchema);
