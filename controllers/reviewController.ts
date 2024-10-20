import { Request, Response } from 'express';
import Review from '../models/reviewModel';
import { log } from 'console';

// Create a new review
export const createReview = async (req: Request, res: Response) => {
  try {
    const { userId, name, farmerId, productId, rating, reviewtxt, orderNo } = req.body;
     log('hi', orderNo, reviewtxt, productId, rating, userId, name)
    // if order_no is exist on OrderService return Your order no is Wrong

    const newReview = new Review({
      customer_id : userId,
      customer_name: name,
      farmer_id: farmerId,
      product_id: productId,
      rating,
      review_text: reviewtxt,
      order_no: orderNo
    });

    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(500).json({ message: 'Error creating review', error });
  }
};

// Get reviews by productId
export const getReviewsByProductId = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const reviews = await Review.find({ product_id: productId });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
};

// Get reviews by customerId
export const getReviewsByCustomerId = async (req: Request, res: Response) => {
  try {
    const { customerId } = req.params; //userId
    const reviews = await Review.find({ customer_id: customerId });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
};

// Get all reviews for a farmer by farmerId
export const getReviewsForFarmer = async (req: Request, res: Response) => {
  try {
    const { farmerId } = req.params;
    const reviews = await Review.find({ farmer_id: farmerId });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
};

// Get all reviews for admin (all reviews)
export const getAllReviewsForAdmin = async (req: Request, res: Response) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
};

// Approve or reject a review (admin only)
export const updateReviewStatus = async (req: Request, res: Response) => {
  try {
    const { reviewId } = req.params;
    const { status } = req.body; // status should be 'approved' or 'rejected'

    if (!['approved', 'rejected'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const updatedReview = await Review.findByIdAndUpdate(
      reviewId,
      { status },
      { new: true }
    );

    if (!updatedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ message: 'Error updating review status', error });
  }
};

// Delete a review
export const deleteReview = async (req: Request, res: Response) => {
  try {
    const { reviewId } = req.params;

    const deletedReview = await Review.findByIdAndDelete(reviewId);

    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting review', error });
  }
};
