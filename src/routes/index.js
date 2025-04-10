import { Router } from "express";
import userRoutes from "./user.routes.js";

const router = Router();


router.use("/users", userRoutes);

// 🚧 Placeholder for product routes (not yet implemented)
router.use("/products", (req, res) => {
  res.status(200).json({ message: "Products route coming soon!" });
});

export default router;
