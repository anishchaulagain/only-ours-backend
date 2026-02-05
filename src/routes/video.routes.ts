import { Router } from "express";
import { createVideo, getVideos, getVideoById, deleteVideo } from "../controllers/video.controller";
import { verifyToken, isAdmin } from "../middleware/auth.middleware";

const router = Router();

// Public routes
router.get("/", getVideos);
router.get("/:id", getVideoById);

// Protected routes (Admin only)
router.post("/", verifyToken, isAdmin, createVideo);
router.delete("/:id", verifyToken, isAdmin, deleteVideo);

export default router;
