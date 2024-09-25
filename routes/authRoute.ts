// routes/authRoutes.ts
import express from "express";
import {
  getUserProfile,
  logOut,
  loginUser,
  registerUser,
  updateUserProfile,
} from "../controllers/authController";

const authrRouter = express.Router();

// Registration route
authrRouter.post("/register", registerUser);
authrRouter.post("/login", loginUser);
authrRouter.get("/logout", logOut);


// Get user profile
authrRouter.get("/profile", getUserProfile);

// Update user profile
authrRouter.put("/profile", updateUserProfile); 

export default authrRouter;