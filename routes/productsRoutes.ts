import express from "express";
import roleMiddleware from "../middleware/roleMiddleweare";
import { authMiddleware2 } from "../test/authMiddleware";
import { createProduct, getProducts, getSingleProduct } from "../controllers/productsController";


const productsRouter = express.Router();

// join-farmer route
productsRouter.post("/products/create", roleMiddleware('farmer'),createProduct);
productsRouter.get("/products",  authMiddleware2, getProducts);
productsRouter.get("/products/:id",authMiddleware2, getSingleProduct);
/* productsRouter.put("/categories/:id",roleMiddleware('admin'), upadteCategory);
productsRouter.delete("/categories/:id",roleMiddleware('admin'), delteCategory); */



export default productsRouter;