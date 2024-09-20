// routes/authRoutes.ts
import express from "express";

import roleMiddleware from "../middleware/roleMiddleweare";
import { createCategory, delteCategory, getCategory, getCategoryById, upadteCategory } from "../controllers/categoryContorller";

const categoryRouter = express.Router();

// join-farmer route
categoryRouter.post("/categories/create", roleMiddleware('admin'),createCategory);
categoryRouter.get("/categories",  roleMiddleware('admin'), getCategory);
categoryRouter.get("/categories/:id",roleMiddleware('admin'), getCategoryById);
categoryRouter.put("/categories/:id",roleMiddleware('admin'), upadteCategory);
categoryRouter.delete("/categories/:id",roleMiddleware('admin'), delteCategory);




export default categoryRouter;