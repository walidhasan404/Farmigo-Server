import express from "express";
import roleMiddleware from "../middleware/roleMiddleweare";
import { createProduct, getProducts, getSingleProduct } from "../controllers/productsController";
import { authMiddleware2 } from "../middleware/authMiddleware";



const productsRouter = express.Router();

// join-farmer route
productsRouter.post("/products/create",authMiddleware2, roleMiddleware('farmer'),createProduct);
productsRouter.get("/products", getProducts);
productsRouter.get("/products/:id", getSingleProduct);
/* productsRouter.put("/categories/:id",roleMiddleware('admin'), upadteCategory);
productsRouter.delete("/categories/:id",roleMiddleware('admin'), deleteCategory); */



export default productsRouter;