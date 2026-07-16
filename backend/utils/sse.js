/**
 * Initializes SSE response headers.
 */
function initSSE(res) {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache, no-transform",
    Connection: "keep-alive",
    "X-Accel-Buffering": "no", // disable proxy buffering (nginx)
  });
  res.flushHeaders?.();
}

/**
 * Writes a named SSE event. Matches `es.addEventListener("<event>", ...)`
 * on the frontend, which JSON.parses `e.data`.
 */
function sendSSE(res, event, data) {
  res.write(`event: ${event}\n`);
  res.write(`data: ${JSON.stringify(data)}\n\n`);
}

module.exports = { initSSE, sendSSE };
