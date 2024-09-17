// routes/authRoutes.ts
import express from "express";
import { registerUser } from "../controllers/authController";

const router = express.Router();

// Registration route
router.post("/register", registerUser);

export default router;
