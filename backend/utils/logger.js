/* eslint-disable no-console */
const levels = { error: 0, warn: 1, info: 2, debug: 3 };
const currentLevel = process.env.LOG_LEVEL || "info";

function ts() {
  return new Date().toISOString();
}

function log(level, msg) {
  if (levels[level] > levels[currentLevel]) return;
  const line = `[${ts()}] [${level.toUpperCase()}] ${msg}`;
  if (level === "error") console.error(line);
  else if (level === "warn") console.warn(line);
  else console.log(line);
}

module.exports = {
  error: (msg) => log("error", msg),
  warn: (msg) => log("warn", msg),
  info: (msg) => log("info", msg),
  debug: (msg) => log("debug", msg),
};
