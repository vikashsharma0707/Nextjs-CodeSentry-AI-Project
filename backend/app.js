// const express = require("express");
// const helmet = require("helmet");
// const cors = require("cors");
// const morgan = require("morgan");
// const compression = require("compression");
// const cookieParser = require("cookie-parser");
// const mongoSanitize = require("express-mongo-sanitize");
// const swaggerUi = require("swagger-ui-express");

// const env = require("./config/env");
// const swaggerSpec = require("./config/swagger");
// const { apiLimiter } = require("./middleware/rateLimiter");
// const { notFound, errorHandler } = require("./middleware/errorHandler");

// const authRoutes = require("./routes/authRoutes");
// const userRoutes = require("./routes/userRoutes");
// const githubRoutes = require("./routes/githubRoutes");
// const { reviewsRouter, reviewRouter } = require("./routes/reviewRoutes");
// const healthRoutes = require("./routes/healthRoutes");

// const app = express();

// // ── Security & core middleware ──────────────────────────────────────────
// app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
// app.use(
//   cors({
//     origin: env.CLIENT_URL,
//     credentials: true,
//     exposedHeaders: ["Content-Type"],
//   })
// );
// app.use(compression());
// app.use(cookieParser());
// app.use(express.json({ limit: "2mb" }));
// app.use(express.urlencoded({ extended: true, limit: "2mb" }));
// app.use(mongoSanitize());
// app.use(morgan(env.NODE_ENV === "development" ? "dev" : "combined"));
// app.use("/api", apiLimiter);

// // ── Swagger docs ─────────────────────────────────────────────────────────
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// app.get("/api-docs.json", (req, res) => res.json(swaggerSpec));

// // ── Routes ───────────────────────────────────────────────────────────────
// app.use("/api/health", healthRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/github", githubRoutes);
// app.use("/api/reviews", reviewsRouter); // plural — history/CRUD
// app.use("/api/review", reviewRouter); // singular — AI actions (SSE, chat, fixes)

// app.get("/", (req, res) => {
//   res.json({ name: "BunoBagera API", status: "running", docs: "/api-docs" });
// });

// // ── Error handling (must be last) ───────────────────────────────────────
// app.use(notFound);
// app.use(errorHandler);

// module.exports = app;

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const swaggerUi = require("swagger-ui-express");

const env = require("./config/env");
const swaggerSpec = require("./config/swagger");
const { apiLimiter } = require("./middleware/rateLimiter");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const githubRoutes = require("./routes/githubRoutes");
const { reviewsRouter, reviewRouter } = require("./routes/reviewRoutes");
const healthRoutes = require("./routes/healthRoutes");

const app = express();

// ── Allowed Origins with Render Wildcard Support ───────────────────────
const allowedOrigins = [
  env.CLIENT_URL,                    // Local development[](http://localhost:3000)
  "https://codesentry.ai",           // Production custom domain
  "https://www.codesentry.ai",
];

// Regex to allow all Render.com subdomains (*.onrender.com)
const renderRegex = /^https:\/\/.*\.onrender\.com$/;

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (Postman, mobile apps, etc.)
      if (!origin) return callback(null, true);

      // Check exact matches
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // Check Render wildcard
      if (renderRegex.test(origin)) {
        return callback(null, true);
      }

      // Reject others in production
      if (env.NODE_ENV === "production") {
        return callback(new Error("Not allowed by CORS"));
      }

      // In development, be more lenient
      callback(null, true);
    },
    credentials: true,
    exposedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  })
);

// ── Security & Core Middleware ──────────────────────────────────────────
app.use(helmet({ 
  crossOriginResourcePolicy: { policy: "cross-origin" },
  contentSecurityPolicy: false
}));
app.use(compression());
app.use(cookieParser());
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true, limit: "2mb" }));
app.use(mongoSanitize());
app.use(morgan(env.NODE_ENV === "development" ? "dev" : "combined"));
app.use("/api", apiLimiter);

// ── Swagger ─────────────────────────────────────────────────────────────
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get("/api-docs.json", (req, res) => res.json(swaggerSpec));

// ── Routes ──────────────────────────────────────────────────────────────
app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/github", githubRoutes);
app.use("/api/reviews", reviewsRouter);
app.use("/api/review", reviewRouter);

app.get("/", (req, res) => {
  res.json({ 
    name: "CodeSentry API", 
    status: "running", 
    environment: env.NODE_ENV,
    docs: "/api-docs" 
  });
});

// ── Error Handling ──────────────────────────────────────────────────────
app.use(notFound);
app.use(errorHandler);

module.exports = app;