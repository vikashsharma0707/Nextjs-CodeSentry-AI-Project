const app = require("./app");
const env = require("./config/env");
const connectDB = require("./config/db");
const logger = require("./utils/logger");
const startStuckReviewSweeper = require("./cron/stuckReviewSweeper");
const startWeeklyDigest = require("./cron/weeklyDigest");

async function start() {
  await connectDB();

  startStuckReviewSweeper();
  startWeeklyDigest();

  const server = app.listen(env.PORT, () => {
    logger.info(`BunoBagera API running on port ${env.PORT} [${env.NODE_ENV}]`);
    logger.info(`Swagger docs available at http://localhost:${env.PORT}/api-docs`);
  });

  // SSE connections can be long-lived; extend default header/keep-alive timeouts.
  server.keepAliveTimeout = 120_000;
  server.headersTimeout = 125_000;

  process.on("unhandledRejection", (err) => {
    logger.error(`Unhandled rejection: ${err.message}`);
    server.close(() => process.exit(1));
  });

  process.on("SIGTERM", () => {
    logger.info("SIGTERM received, shutting down gracefully.");
    server.close(() => process.exit(0));
  });
}

start();
