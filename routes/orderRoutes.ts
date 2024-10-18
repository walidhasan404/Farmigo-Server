// routes/authRoutes.ts
import express from "express";

import { createCheckoutSession, createPaymentIntent, newCollection } from "../controllers/orderController";
// import { createOrder, confirmOrderPayment } from '../controllers/orderController';


const orderRouter = express.Router();
orderRouter.post('/create-checkout', createCheckoutSession)
orderRouter.post('/create-payment-intent', createPaymentIntent)
orderRouter.post('/new-collection', newCollection)

// 


export default orderRouter;