import { authMiddleware2 } from './../middleware/authMiddleware';
// routes/authRoutes.ts
import express from "express";

import roleMiddleware from "../middleware/roleMiddleweare";
import { createCategory, delteCategory, getCategory, getCategoryById, upadteCategory } from "../controllers/categoryContorller";
import { auth } from 'firebase-admin';

const categoryRouter = express.Router();

// join-farmer route
categoryRouter.post("/categories/create", authMiddleware2, roleMiddleware('admin'),createCategory);
categoryRouter.get("/categories", getCategory);
categoryRouter.get("/categories/:id",authMiddleware2, roleMiddleware('admin'), getCategoryById);
categoryRouter.put("/categories/:id",authMiddleware2, roleMiddleware('admin'), upadteCategory);
categoryRouter.delete("/categories/:id",authMiddleware2, roleMiddleware('admin'), delteCategory);


 

export default categoryRouter;