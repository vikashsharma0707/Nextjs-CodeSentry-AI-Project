require("dotenv").config();
const mongoose = require("mongoose");
const env = require("../config/env");
const User = require("../models/User");
const Review = require("../models/Review");
const logger = require("../utils/logger");

async function seed() {
  await mongoose.connect(env.MONGO_URI);
  logger.info("Connected to MongoDB for seeding.");

  const destroy = process.argv.includes("--destroy");

  if (destroy) {
    await User.deleteMany({ email: "demo@bunobagera.ai" });
    await Review.deleteMany({});
    logger.info("Destroyed seed data.");
    return process.exit(0);
  }

  let user = await User.findOne({ email: "demo@bunobagera.ai" });
  if (!user) {
    user = await User.create({
      username: "Demo User",
      email: "demo@bunobagera.ai",
      password: "password123",
      plan: "pro",
      reviewCount: 2,
      isEmailVerified: true,
    });
    logger.info(`Created demo user: ${user.email} / password123`);
  } else {
    logger.info("Demo user already exists, skipping user creation.");
  }

  const existingReviews = await Review.countDocuments({ user: user._id });
  if (existingReviews === 0) {
    await Review.insertMany([
      {
        user: user._id,
        repositoryOwner: "demo-org",
        repositoryName: "my-saas-app",
        reviewType: "full",
        status: "completed",
        primaryLanguage: "TypeScript",
        filesReviewed: [{ path: "src/index.ts", language: "TypeScript" }],
        issuesFoundCount: 3,
        messages: [
          { role: "system", content: "AI code review of demo-org/my-saas-app (full)." },
          {
            role: "assistant",
            content:
              "### File: src/index.ts\n\n**High** — Missing input validation on the `/login` route. Recommend adding schema validation before touching the database.\n\n**Medium** — Unused import `lodash` increases bundle size unnecessarily.",
          },
        ],
      },
      {
        user: user._id,
        repositoryOwner: "demo-org",
        repositoryName: "backend-api",
        reviewType: "security",
        status: "completed",
        primaryLanguage: "Go",
        filesReviewed: [{ path: "main.go", language: "Go" }],
        issuesFoundCount: 1,
        messages: [
          { role: "system", content: "AI code review of demo-org/backend-api (security)." },
          {
            role: "assistant",
            content: "**Critical** — JWT secret appears to be hard-coded. Move it to an environment variable immediately.",
          },
        ],
      },
    ]);
    logger.info("Seeded 2 sample reviews for the demo user.");
  } else {
    logger.info("Reviews already exist for the demo user, skipping.");
  }

  logger.info("Seeding complete.");
  process.exit(0);
}

seed().catch((err) => {
  logger.error(`Seeding failed: ${err.message}`);
  process.exit(1);
});
