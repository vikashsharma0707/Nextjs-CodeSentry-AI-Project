const nodemailer = require("nodemailer");
const env = require("../config/env");
const logger = require("../utils/logger");

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  if (!env.SMTP_HOST || !env.SMTP_USER) {
    logger.warn("SMTP is not configured — emails will be logged instead of sent.");
    return null;
  }

  transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_SECURE,
    auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
  });
  return transporter;
}

async function sendMail({ to, subject, html, text }) {
  const t = getTransporter();

  if (!t) {
    logger.info(`[DEV EMAIL] To: ${to} | Subject: ${subject}\n${text || html}`);
    return { simulated: true };
  }

  return t.sendMail({
    from: env.EMAIL_FROM,
    to,
    subject,
    html,
    text,
  });
}

async function sendVerificationEmail(user, token) {
  const url = `${env.CLIENT_URL}/verify-email?token=${token}`;
  return sendMail({
    to: user.email,
    subject: "Verify your BunoBagera account",
    html: `<p>Hi ${user.username},</p><p>Please verify your email by clicking the link below:</p><p><a href="${url}">${url}</a></p><p>This link expires in 24 hours.</p>`,
    text: `Verify your email: ${url}`,
  });
}

async function sendPasswordResetEmail(user, token) {
  const url = `${env.CLIENT_URL}/reset-password?token=${token}`;
  return sendMail({
    to: user.email,
    subject: "Reset your BunoBagera password",
    html: `<p>Hi ${user.username},</p><p>You requested a password reset. Click the link below to set a new password:</p><p><a href="${url}">${url}</a></p><p>This link expires in 1 hour. If you didn't request this, you can ignore this email.</p>`,
    text: `Reset your password: ${url}`,
  });
}

module.exports = { sendMail, sendVerificationEmail, sendPasswordResetEmail };
