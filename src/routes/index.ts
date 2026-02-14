import { Router } from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
import videoRoutes from "./video.routes";
import galleryRoutes from "./gallery.routes";
import categoryRoutes from "./category.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/videos", videoRoutes);
router.use("/gallery", galleryRoutes);
router.use("/categories", categoryRoutes);

export default router;
