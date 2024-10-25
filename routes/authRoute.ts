// routes/authRoutes.ts
import express from "express";
import {
  getUserProfile,
  loginUser,
  registerUser,
  updateUserProfile,
} from "../controllers/authController";
import { authMiddleware2, isAdmin } from "../middleware/authMiddleware";
// import { createProduct } from "../test/productCotroller";
import { createBlog, getAllBlogs } from "../controllers/blogController";

const router = express.Router();

// Registration route
router.post("/register", registerUser);
router.post("/login", loginUser);

// Get user profile
router.get("/profile", authMiddleware2, getUserProfile);
// Update user profile
router.put("/update/profile", authMiddleware2, updateUserProfile);

// create product
// router.post("/product", authMiddleware2, createProduct);

// create blog
router.post("/blog", authMiddleware2, isAdmin, createBlog);

// get all blogs data from database
router.get("/blogs", authMiddleware2, getAllBlogs);

export default router;
