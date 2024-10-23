import { Schema, model, Document } from 'mongoose';

// Define an interface for the Review document
interface IReview extends Document {
  customer_id: Schema.Types.ObjectId;
  customer_name: string;
  farmer_id: Schema.Types.ObjectId;
  product_id?: Schema.Types.ObjectId; // Optional
  rating: number;
  review_text: string;
  review_date: Date;
  status: 'approved' | 'pending' | 'rejected';
  order_no: string; 
  reply?: string; // Optional
}

// Define the review schema
const reviewSchema = new Schema<IReview>({
  customer_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  customer_name: {
    type: String,
    required: true
  },
  farmer_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  product_id: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: false // Optional field
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5 // Assuming ratings are between 0 and 5
  },
  review_text: {
    type: String,
    required: true
  },
  review_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['approved', 'pending', 'rejected'],
    default: 'pending'
  },
  order_no: {
    type: String,
    required: true
  },
  reply: {
    type: String,
    required: false // Optional field
  }
});

// Create the Mongoose model
const Review = model<IReview>('Review', reviewSchema);

export default Review;
