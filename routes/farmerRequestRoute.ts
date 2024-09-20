// routes/authRoutes.ts
import express from "express";
import {
    approveFarmerRequest,
    declineFarmerRequest,
    getFarmerRequests,
    requestToJoinFarmer, 
} from "../controllers/farmerRequestControllers";
import roleMiddleware from "../middleware/roleMiddleweare";

const farmRequestRouter = express.Router();

// join-farmer route
farmRequestRouter.post("/join-farmer", requestToJoinFarmer);
farmRequestRouter.get("/farmer/request",  roleMiddleware('admin'), getFarmerRequests);
farmRequestRouter.put("/admin-request/approved/:id",roleMiddleware('admin'), approveFarmerRequest);
farmRequestRouter.put("/admin/rquest/decliner/:id",roleMiddleware('admin'), declineFarmerRequest);



export default farmRequestRouter;