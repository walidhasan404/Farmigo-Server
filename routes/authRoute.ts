// routes/authRoutes.ts
import express from "express";
import {
  loginUser,
  registerUser,
} from "../controllers/authController";

const router = express.Router();

// Registration route
router.post("/register", registerUser);
router.post("/login", loginUser);
// Get user profile
/* router.get("/profile", getUserProfile);

// Update user profile
router.put("/profile", updateUserProfile); */

export default router;