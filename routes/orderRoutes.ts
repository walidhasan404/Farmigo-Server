// routes/authRoutes.ts
import express from "express";

import { authMiddleware2, isAdmin } from "../middleware/authMiddleware";
import { createCheckoutSession, createPaymentIntent, newCollection } from "../controllers/orderController";
// import { createOrder, confirmOrderPayment } from '../controllers/orderController';


const router = express.Router();
router.post('/create-checkout', createCheckoutSession)
router.post('/create-payment-intent', createPaymentIntent)
router.post('/new-collection', newCollection)

// 


export default router;
