const mongoose = require("mongoose");

const languageSchema = new mongoose.Schema(
  {
    name: String,
    percentage: Number,
    color: String,
  },
  { _id: false }
);

const profileAnalysisSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },
    developerPersona: {
      type: String,
      default: "",
    },
    profileSummary: {
      type: String,
      default: "",
    },
    strengths: {
      type: [String],
      default: [],
    },
    topLanguages: {
      type: [languageSchema],
      default: [],
    },
    recommendations: {
      type: [String],
      default: [],
    },
    reposAnalyzed: {
      type: Number,
      default: 0,
    },
    generatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Cache is valid for 24 hours unless force-regenerated
profileAnalysisSchema.methods.isStale = function () {
  const ONE_DAY = 24 * 60 * 60 * 1000;
  return Date.now() - this.generatedAt.getTime() > ONE_DAY;
};

module.exports = mongoose.model("GithubProfileAnalysis", profileAnalysisSchema);
