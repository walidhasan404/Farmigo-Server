// routes/authRoutes.ts
import express from "express";
import {
  getUserProfile,
  googleAuth,
  logOut,
  loginUser,
  registerUser,
  updateUserProfile,
} from "../controllers/authController";
import { authMiddleware2 } from "../middleware/authMiddleware";

const authrRouter = express.Router();

// Registration route
authrRouter.post("/register", registerUser);
authrRouter.post("/login", loginUser);
authrRouter.get("/logout", authMiddleware2, logOut);
authrRouter.post("/google-auth", googleAuth);


// Get user profile
authrRouter.get("/profile",authMiddleware2, getUserProfile);

// Update user profile
authrRouter.put("/profile",authMiddleware2, updateUserProfile); 

export default authrRouter;