// routes/authRoutes.ts
import express from "express";
import {
    approveFarmerRequest,
    declineFarmerRequest,
    getFarmerRequests,
    requestToJoinFarmer, 
} from "../controllers/farmerRequestControllers";
import roleMiddleware from "../middleware/roleMiddleweare";
import { authMiddleware2 } from "../middleware/authMiddleware";

const farmRequestRouter = express.Router();

// join-farmer route
farmRequestRouter.post("/join-farmer", requestToJoinFarmer);
farmRequestRouter.get("/farmer/request",authMiddleware2,roleMiddleware('admin'), getFarmerRequests);
farmRequestRouter.put("/admin-request/approved/:id",authMiddleware2, roleMiddleware('admin'), approveFarmerRequest);
farmRequestRouter.put("/admin/rquest/decliner/:id",authMiddleware2, roleMiddleware('admin'), declineFarmerRequest);



export default farmRequestRouter;