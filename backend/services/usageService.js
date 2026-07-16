const UsageStat = require("../models/UsageStat");
const env = require("../config/env");

/**
 * Records a single AI call's token usage against a user.
 */
async function logUsage(userId, endpoint, usage = {}) {
  try {
    await UsageStat.create({
      user: userId,
      model: env.OPENROUTER_MODEL,
      endpoint,
      promptTokens: usage.prompt_tokens || 0,
      completionTokens: usage.completion_tokens || 0,
      totalTokens: usage.total_tokens || (usage.prompt_tokens || 0) + (usage.completion_tokens || 0),
    });
  } catch (err) {
    // Usage logging must never break the primary request flow.
  }
}

/**
 * Builds the rate-limits payload the dashboard's RateLimitsWidget expects:
 * current RPM/TPM/RPD usage against configured limits, plus a short
 * historical time series (last 8 x 15-minute buckets) for the area chart.
 */
async function getRateLimitStats(userId) {
  const now = Date.now();
  const oneMinuteAgo = new Date(now - 60 * 1000);
  const oneDayAgo = new Date(now - 24 * 60 * 60 * 1000);

  const [lastMinuteStats, lastDayCount] = await Promise.all([
    UsageStat.aggregate([
      { $match: { user: userId, createdAt: { $gte: oneMinuteAgo } } },
      {
        $group: {
          _id: null,
          requests: { $sum: 1 },
          tokens: { $sum: "$totalTokens" },
        },
      },
    ]),
    UsageStat.countDocuments({ user: userId, createdAt: { $gte: oneDayAgo } }),
  ]);

  const current = {
    rpm: lastMinuteStats[0]?.requests || 0,
    tpm: lastMinuteStats[0]?.tokens || 0,
    rpd: lastDayCount || 0,
  };

  // Build 8 buckets of 15 minutes each, covering the last 2 hours.
  const bucketMinutes = 15;
  const bucketCount = 8;
  const bucketMs = bucketMinutes * 60 * 1000;
  const windowStart = new Date(now - bucketCount * bucketMs);

  const raw = await UsageStat.aggregate([
    { $match: { user: userId, createdAt: { $gte: windowStart } } },
    {
      $group: {
        _id: {
          $floor: { $divide: [{ $subtract: ["$createdAt", windowStart] }, bucketMs] },
        },
        requests: { $sum: 1 },
        tokens: { $sum: "$totalTokens" },
      },
    },
  ]);

  const buckets = new Map(raw.map((b) => [b._id, b]));
  const history = [];
  for (let i = 0; i < bucketCount; i++) {
    const bucketTime = new Date(windowStart.getTime() + i * bucketMs);
    const bucket = buckets.get(i);
    history.push({
      time: bucketTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      requests: bucket?.requests || 0,
      tokens: bucket?.tokens || 0,
    });
  }

  return {
    model: env.OPENROUTER_MODEL,
    limits: {
      rpm: env.AI_RPM_LIMIT,
      tpm: env.AI_TPM_LIMIT,
      rpd: env.AI_RPD_LIMIT,
    },
    current,
    history,
  };
}

module.exports = { logUsage, getRateLimitStats };
