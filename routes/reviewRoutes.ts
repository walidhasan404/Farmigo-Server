import express from 'express';
import {
  createReview,
  getReviewsByProductId,
  getReviewsByCustomerId,
  getReviewsForFarmer,
  getAllReviewsForAdmin,
  updateReviewStatus,
  deleteReview
} from '../controllers/reviewController';

const reviewRouter = express.Router();

// Create a review
reviewRouter.post('/create', createReview);

// Get reviews by product ID
reviewRouter.get('/product/:productId', getReviewsByProductId);

// Get reviews by customer ID
reviewRouter.get('/customer/:customerId', getReviewsByCustomerId);

// Get all reviews for a farmer by farmer ID
reviewRouter.get('/farmer/:farmerId', getReviewsForFarmer);

// Get all reviews for admin
reviewRouter.get('/admin/all', getAllReviewsForAdmin);

// Approve or reject a review (admin only)
reviewRouter.patch('/admin/review/:reviewId/status', updateReviewStatus);

// Delete a review
reviewRouter.delete('/review/:reviewId', deleteReview);

export default reviewRouter;
