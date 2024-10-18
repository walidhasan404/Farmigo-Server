import { Request, Response } from "express";
import Stripe from "stripe";
import Order from "../models/orderModel";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export const createPaymentIntent = async (req: Request, res: Response) => {
  const { price } = req.body;

  // console.log("Creating payment intent with price:", req.body);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: price * 100,
      currency: "usd",
      payment_method_types: ["card"],
    });

    // console.log("Payment Intent created:", paymentIntent);

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    // console.error("Error creating payment intent:", err);

    res.status(500).send({ error: "Failed to create payment intent" });
  }
};

export const createCheckoutSession = async (req: Request, res: Response) => {
  const { orderItems, shippingCost, total, orderId, email } = req.body;

  console.log("Creating checkout session with order items:", req.body);
  

  try {
    const lineItems = orderItems.map((item: any) => {
      // Ensure price is a number
      const unitAmount = parseFloat(item.price) * 100; // Convert price to cents

      if (isNaN(unitAmount)) {
        throw new Error(`Invalid price for item: ${JSON.stringify(item)}`);
      }

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name || "Product", // Assuming `name` is provided in the request
            images: item.image ? [item.image] : [], // Assuming `image` is provided (optional),
          },
          unit_amount: unitAmount,
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/order/success?orderId=${orderId}`,
      cancel_url: `${process.env.CLIENT_URL}/order/cancel`,
      customer_email: email,
    });

    // console.log("Checkout session created:", session);



    await Order.findByIdAndUpdate(orderId, {
      status: "paid",
    })


    res.status(200).json({
      success_url: session.success_url,
      id: session.id,
      cancel_url: session.cancel_url,
    });
  } catch (error) {
    // console.error("Error creating Stripe session:", error);

    res.status(500).json({ error: "Internal server error" });
  }
};

export const newCollection = async (req: Request, res: Response) => {
  const {
    email,
    country,
    firstName,
    lastName,
    address,
    apartment,
    city,
    division,
    postalCode,
    saveInfo,
    useShippingAddress,
    shippingMethod,
    shippingCost,
    total,
    orderItems,
  } = req.body;

  try {
    const newOrder = new Order({
      email,
      country,
      firstName,
      lastName,
      address,
      apartment,
      city,
      division,
      postalCode,
      saveInfo,
      useShippingAddress,
      shippingMethod,
      shippingCost,
      total,
      orderItems,
    });

    // Save the order to MongoDB
    const savedOrder = await newOrder.save();

    // console.log("Order saved:", savedOrder);

    res.status(201).json({
      message: "Order placed successfully",
      orderId: savedOrder._id,
    });
  } catch (error) {
    // console.error("Error saving the order:", error);
    res.status(500).json({ error: "Failed to save order" });
  }
};