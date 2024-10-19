// routes/authRoutes.ts
import express from "express";
import {
  getAllUsers,
  getUserCount,
  getUserProfile,
  loginUser,
  registerUser,
  updateUserProfile,
} from "../controllers/authController";
import { authMiddleware2, isAdmin } from "../middleware/authMiddleware";
// import { createProduct } from "../test/productCotroller";
import { createBlog, deleteBlog, getAllBlogs, updateBlog } from "../controllers/blogController";

const router = express.Router();

// Registration route
router.post("/register", registerUser);
router.post("/login", loginUser);

// Get user profile
router.get("/profile", authMiddleware2, getUserProfile);
// Update user profile
router.put("/update/profile", authMiddleware2, updateUserProfile);

// create product
router.post("/product", authMiddleware2);

// create blog
router.post("/blogs", authMiddleware2, createBlog);

// get all blogs data from database
router.get("/blogs", authMiddleware2, getAllBlogs);

// edit blog data
router.put("/blogs/:id", authMiddleware2, isAdmin, updateBlog);

// delete a blog
router.delete("/blogs/:id", authMiddleware2, isAdmin, deleteBlog);

// get user count
router.get('/user-count', getUserCount);

// get all users
router.get('/get-users', getAllUsers)

export default router;
