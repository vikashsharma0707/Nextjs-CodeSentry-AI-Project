/**
 * The frontend's AuthContext.mapStrapiUser() reads: id, username, email,
 * githubUsername, githubConnected, plan, reviewCount. We return exactly
 * that shape (plus a few extra harmless fields) from every auth/user
 * endpoint so the existing frontend code works unmodified.
 */
function mapUserForFrontend(user) {
  return {
    id: user._id,
    username: user.username,
    email: user.email,
    githubUsername: user.githubUsername || "",
    githubConnected: !!user.githubConnected,
    plan: user.plan,
    reviewCount: user.reviewCount,
    reviewsLimit: user.reviewsLimit,
    avatarUrl: user.avatarUrl,
    isEmailVerified: user.isEmailVerified,
    notificationPreferences: user.notificationPreferences,
    role: user.role,
    createdAt: user.createdAt,
  };
}

module.exports = { mapUserForFrontend };
