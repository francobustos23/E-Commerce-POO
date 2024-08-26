import { Router } from "express";
import userRoutes from "./user.routes.js";
import productRoutes from "./productos.routes.js";

const router = Router();

router.use("/api", userRoutes);
router.use("/api", productRoutes);

export { router };