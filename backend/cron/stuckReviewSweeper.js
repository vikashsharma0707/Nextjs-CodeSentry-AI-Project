const cron = require("node-cron");
const Review = require("../models/Review");
const logger = require("../utils/logger");

/**
 * Every 10 minutes, mark any review that has been stuck in "pending" for
 * over an hour as "failed" — this guards against SSE connections that were
 * dropped mid-stream (client closed tab, network loss) and never resolved.
 */
function startStuckReviewSweeper() {
  cron.schedule("*/10 * * * *", async () => {
    const cutoff = new Date(Date.now() - 60 * 60 * 1000);
    try {
      const result = await Review.updateMany(
        { status: "pending", createdAt: { $lt: cutoff } },
        {
          $set: { status: "failed" },
          $push: { messages: { role: "assistant", content: "Analysis timed out or was interrupted." } },
        }
      );
      if (result.modifiedCount > 0) {
        logger.info(`Stuck-review sweeper: marked ${result.modifiedCount} review(s) as failed.`);
      }
    } catch (err) {
      logger.error(`Stuck-review sweeper failed: ${err.message}`);
    }
  });
}

module.exports = startStuckReviewSweeper;
