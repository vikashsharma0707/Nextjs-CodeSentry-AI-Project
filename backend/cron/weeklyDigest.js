const cron = require("node-cron");
const User = require("../models/User");
const Review = require("../models/Review");
const emailService = require("../services/emailService");
const logger = require("../utils/logger");

/**
 * Every Monday at 09:00 server time, emails a weekly digest to users who
 * opted into notificationPreferences.weeklyDigest, summarizing reviews run
 * and issues found over the past 7 days.
 */
function startWeeklyDigest() {
  cron.schedule("0 9 * * 1", async () => {
    const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    try {
      const users = await User.find({ "notificationPreferences.weeklyDigest": true });

      for (const user of users) {
        const reviews = await Review.find({ user: user._id, createdAt: { $gte: since } });
        if (reviews.length === 0) continue;

        const issuesFound = reviews.reduce((sum, r) => sum + (r.issuesFoundCount || 0), 0);
        const fixesApplied = reviews.filter((r) => r.prUrl).length;

        await emailService.sendMail({
          to: user.email,
          subject: "Your BunoBagera weekly digest",
          html: `<p>Hi ${user.username},</p><p>This week you ran <strong>${reviews.length}</strong> review(s), found <strong>${issuesFound}</strong> issue(s), and applied <strong>${fixesApplied}</strong> fix(es).</p>`,
          text: `This week: ${reviews.length} reviews, ${issuesFound} issues found, ${fixesApplied} fixes applied.`,
        });
      }

      logger.info(`Weekly digest: processed ${users.length} opted-in user(s).`);
    } catch (err) {
      logger.error(`Weekly digest cron failed: ${err.message}`);
    }
  });
}

module.exports = startWeeklyDigest;
