import { Router } from "express";
import { createImage, getImages, deleteImage } from "../controllers/gallery.controller";
import { verifyToken, isAdmin } from "../middleware/auth.middleware";

const router = Router();

// Public routes
router.get("/", getImages);

// Protected routes (Admin only)
router.post("/", verifyToken, isAdmin, createImage);
router.delete("/:id", verifyToken, isAdmin, deleteImage);

export default router;
