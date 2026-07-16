const swaggerJSDoc = require("swagger-jsdoc");
const env = require("./env");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BunoBagera API",
      version: "1.0.0",
      description:
        "AI-powered GitHub code review platform — REST API. Auth uses JWT bearer tokens. Endpoints mirror the shape the BunoBagera Next.js frontend expects (Strapi-style responses for auth/users/reviews).",
    },
    servers: [
      { url: `http://localhost:${env.PORT}`, description: "Local server" },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./routes/*.js"],
};

module.exports = swaggerJSDoc(options);
