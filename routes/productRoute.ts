import express from "express";
import { deleteProduct, getAllProducts, updateProduct } from "../controllers/productController";
import { authMiddleware2, isAdmin } from "../middleware/authMiddleware";


const router = express.Router();

// Get all products
router.get("/products", getAllProducts);

// Update a product
router.put("/products/:id", authMiddleware2, isAdmin, updateProduct);

// Delete a product
router.delete("/products/:id", authMiddleware2, isAdmin, deleteProduct);

export default router;
