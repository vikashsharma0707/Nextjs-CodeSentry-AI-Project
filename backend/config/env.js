const dotenv = require("dotenv");
dotenv.config();

function required(name, fallback = undefined) {
  const value = process.env[name] ?? fallback;
  return value;
}

module.exports = {
  NODE_ENV: required("NODE_ENV", "development"),
  PORT: parseInt(required("PORT", "1337"), 10),
  CLIENT_URL: required("CLIENT_URL", "http://localhost:3000"),

  MONGO_URI: required("MONGO_URI", "mongodb://127.0.0.1:27017/bunobagera"),

  JWT_SECRET: required("JWT_SECRET", "dev_secret_change_me"),
  JWT_EXPIRES_IN: required("JWT_EXPIRES_IN", "7d"),
  JWT_REFRESH_SECRET: required("JWT_REFRESH_SECRET", "dev_refresh_secret_change_me"),
  JWT_REFRESH_EXPIRES_IN: required("JWT_REFRESH_EXPIRES_IN", "30d"),

  GITHUB_CLIENT_ID: required("GITHUB_CLIENT_ID", ""),
  GITHUB_CLIENT_SECRET: required("GITHUB_CLIENT_SECRET", ""),
  GITHUB_REDIRECT_URI: required("GITHUB_REDIRECT_URI", "http://localhost:3000/dashboard/github/callback"),

  OPENROUTER_API_KEY: required("OPENROUTER_API_KEY", ""),
  OPENROUTER_MODEL: required("OPENROUTER_MODEL", "anthropic/claude-3.5-sonnet"),
  OPENROUTER_BASE_URL: required("OPENROUTER_BASE_URL", "https://openrouter.ai/api/v1"),
  AI_RPM_LIMIT: parseInt(required("AI_RPM_LIMIT", "20"), 10),
  AI_TPM_LIMIT: parseInt(required("AI_TPM_LIMIT", "100000"), 10),
  AI_RPD_LIMIT: parseInt(required("AI_RPD_LIMIT", "1000"), 10),

  CLOUDINARY_CLOUD_NAME: required("CLOUDINARY_CLOUD_NAME", ""),
  CLOUDINARY_API_KEY: required("CLOUDINARY_API_KEY", ""),
  CLOUDINARY_API_SECRET: required("CLOUDINARY_API_SECRET", ""),

  SMTP_HOST: required("SMTP_HOST", ""),
  SMTP_PORT: parseInt(required("SMTP_PORT", "587"), 10),
  SMTP_SECURE: required("SMTP_SECURE", "false") === "true",
  SMTP_USER: required("SMTP_USER", ""),
  SMTP_PASS: required("SMTP_PASS", ""),
  EMAIL_FROM: required("EMAIL_FROM", "BunoBagera <no-reply@bunobagera.ai>"),

  RATE_LIMIT_WINDOW_MS: parseInt(required("RATE_LIMIT_WINDOW_MS", "900000"), 10),
  RATE_LIMIT_MAX: parseInt(required("RATE_LIMIT_MAX", "300"), 10),
};
