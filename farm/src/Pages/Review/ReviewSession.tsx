import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export function StarRating({ rating, setRating }: { rating: number; setRating?: (rating: number) => void }) {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-6 h-6 cursor-pointer ${i < rating ? 'text-green-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            onClick={() => setRating && setRating(i + 1)}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  }
  
 export  function ReviewForm({ onClose , review}: { onClose: () => void , review: any} ) {
    const [rating, setRating] = useState(0);
    const [reviewtxt, setReview] = useState('');
    const [name, setName] = useState('');
    const [orderNo, setOrderNo] = useState('');
  
    const {userId, productId, farmerId} = review;
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      // Prepare the review data object
      const reviewData = {
          rating,
          reviewtxt,
          name,
          userId,
          farmerId,
          productId,
          orderNo,
      };
  console.log('====================================');
  console.log(reviewData);
  console.log('====================================');
      try {
          // Send the review data to the backend
          await axios.post(import.meta.env.VITE_API + '/review/create', reviewData);
          toast.success('Review submitted successfully!');
      } catch (error: any) {
          // Display an error message if the API call fails
          console.error('Error submitting review:', error);
          toast.error('Failed to submit the review. Please try again.');
          //return false; // Indicate failure
      }
  
      // Close the form/modal after successful submission
      onClose();
      //return true; // Indicate success
  };
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Write a review</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Rating</label>
              <StarRating rating={rating} setRating={setRating} />
            </div>
            <div>
              <label htmlFor="name" className="block mb-1">Name (displayed publicly like John Smith)</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded p-2"
                placeholder="Enter your name (public)"
                required
              />
            </div>
            <div>
              <label htmlFor="review" className="block mb-1">Review</label>
              <textarea
                id="review"
                value={reviewtxt}
                onChange={(e) => setReview(e.target.value)}
                className="w-full border rounded p-2"
                placeholder="Write your comments here"
                rows={4}
                required
              ></textarea>
            </div> 
            <div>
              <label htmlFor="order-no" className="block mb-1">Order No</label>
              <input
                type="order_no"
                id="order_no"
                value={orderNo}
                onChange={(e) => setOrderNo(e.target.value)}
                className="w-full border rounded p-2"
                placeholder="Enter your Order No (private)"
                required
              />
            </div>
            <div className="text-sm text-gray-600">
              How we use your data: We'll only contact you about the review you left, and
              only if necessary. By submitting your review, you agree to our terms,
              privacy and content policies.
            </div>
            <div className="flex justify-end space-x-2">
              <button type="button" onClick={onClose} className="px-4 py-2 border rounded">
                Cancel review
              </button>
              <button type="submit" className="px-4 py-2 bg-black text-white rounded">
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
 export function ReviewsContent({ review }: { review: any }) {
    const [showReviewForm, setShowReviewForm] = useState(false);
    const overallRating = 5.00;
    const totalReviews = 2;
    const ratingDistribution = [
      { stars: 5, count: 2 },
      { stars: 4, count: 0 },
      { stars: 3, count: 0 },
      { stars: 2, count: 0 },
      { stars: 1, count: 0 },
    ];
    const reviews = [
      { author: 'john smith', date: '08/05/2024', rating: 5, comment: 'Good' },
      { author: 'M.', date: '10/23/2023', rating: 5, comment: 'test' },
    ];
  
    return (
      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold">Customer Reviews</h2>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-3xl md:text-4xl font-bold">{overallRating.toFixed(2)}</div>
            <div className="flex justify-center md:justify-start">
              <StarRating rating={overallRating} />
            </div>
            <div className="text-sm text-gray-500">Based on {totalReviews} reviews</div>
          </div>
          <div className="flex-1">
            {ratingDistribution.map((dist) => (
              <div key={dist.stars} className="flex items-center text-sm md:text-base">
                <span className="w-16 md:w-20">{dist.stars} star</span>
                <div className="w-full bg-gray-200 rounded-full h-2 md:h-2.5 mx-2">
                  <div
                    className="bg-green-400 h-2 md:h-2.5 rounded-full"
                    style={{ width: `${(dist.count / totalReviews) * 100}%` }}
                  ></div>
                </div>
                <span className="w-8 md:w-10 text-right">{dist.count}</span>
              </div>
            ))}
          </div>
        </div>
        <button 
          className="w-full md:w-auto bg-black text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowReviewForm(true)}
        >
          Write a review
        </button>
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="border-t pt-4">
              <StarRating rating={review.rating} />
              <div className="mt-2 flex flex-col md:flex-row md:items-center">
                <span className="font-bold">{review.author}</span>
                <span className="text-gray-500 md:ml-2">{review.date}</span>
              </div>
              <p className="mt-2">{review.comment}</p>
            </div>
          ))}
        </div>
        {showReviewForm && <ReviewForm onClose={() => setShowReviewForm(false)} review={review} />}
      </div>
    );
  }