// swagger.js
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";
import { fileURLToPath } from "url";

// For ES modules: resolve __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  explorer: true,
  swaggerOptions: {
    validatorUrl: null,
  },
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node.js Express API with Swagger",
      version: "1.0.0",
      description:
        "This is a simple API application using Express and documented with Swagger",
    },
    servers: [
      {
        url: "http://localhost:8000/api/v1",
        name: "Local Env",
      },
    ],
  },
  apis: [path.join(__dirname, "../routes/**/*.js")],
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerServe = swaggerUi.serve;
export const swaggerSetup = swaggerUi.setup(swaggerSpec, options);
