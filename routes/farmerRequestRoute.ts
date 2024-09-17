// routes/authRoutes.ts
import express from "express";
import {
    requestToJoinFarmer
} from "../controllers/farmerRequestControllers";

const router = express.Router();

// join-farmer route
router.post("/join-farmer", requestToJoinFarmer);


export default router;