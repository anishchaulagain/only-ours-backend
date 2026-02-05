import { Router } from "express";
import { createUser, getUsers, deleteUser } from "../controllers/user.controller";
import { verifyToken, isAdmin } from "../middleware/auth.middleware";

const router = Router();

// Protect all routes with verifyToken and isAdmin
router.use(verifyToken, isAdmin);

router.post("/", createUser);
router.get("/", getUsers);
router.delete("/:id", deleteUser);

export default router;