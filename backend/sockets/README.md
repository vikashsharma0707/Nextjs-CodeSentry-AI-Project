# sockets/

The BunoBagera frontend uses **Server-Sent Events** (native `EventSource`)
for real-time AI code review streaming — not Socket.IO. See
`controllers/reviewController.js` (`analyzeStream`) and `utils/sse.js`.

This directory is kept for parity with the requested project structure and
as the natural place to add Socket.IO namespaces/events if real-time
bidirectional features (e.g. live PR status pushes, team presence) are
added later. To wire it up:

```js
// server.js
const { Server } = require("socket.io");
const io = new Server(server, { cors: { origin: env.CLIENT_URL, credentials: true } });
require("./sockets/index")(io);
```
