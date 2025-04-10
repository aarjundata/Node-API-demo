import express from "express";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./src/config/db.js";
import allRoutes from "./src/routes/index.js";
import { swaggerServe, swaggerSetup } from "./src/config/swagger.js";

config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

connectDB();

// Swagger route
app.use("/api-docs", swaggerServe, swaggerSetup); 

// API routes
app.use("/api/v1", allRoutes);

// 404 handler
app.use("/", (req, res) => {
  res.status(404).send("<h1>Error 404 - Page not found</h1>");
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}\nSwagger docs at http://localhost:${PORT}/api-docs`)
);
