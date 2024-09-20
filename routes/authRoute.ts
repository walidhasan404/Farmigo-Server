// routes/authRoutes.ts
import express from "express";
import {
  createProduct,
  getUserProfile,
  loginUser,
  registerUser,
  updateUserProfile,
} from "../controllers/authController";
import { authMiddleware2 } from "../middleware/authMiddleware";

const router = express.Router();

// Registration route
router.post("/register", registerUser);
router.post("/login", loginUser);

// Get user profile
router.get("/profile", authMiddleware2, getUserProfile);
// Update user profile
router.put("/update/profile", authMiddleware2, updateUserProfile);

// create product
router.post("/product", authMiddleware2, createProduct);

export default router;
