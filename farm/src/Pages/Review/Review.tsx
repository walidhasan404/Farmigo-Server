import { useState } from "react";
import { ReviewsContent } from "./ReviewSession";


const tabsData = [
  { label: 'DESCRIPTION', content: 'Description content goes here.' },
  { label: 'ADDITIONAL INFORMATION', content: 'Additional information content goes here.' },
  { label: 'SHIPPING & RETURN', content: 'Shipping and return information goes here.' },
  { label: 'REVIEWS',  },
];





interface Review {
  userId: string;
  productId: string;
  farmerId?: string; // Add optional farmerId
}

export default function Review({ userId, farmerId, productId}: Review) {
  // ... rest of the code

 const review = {
    userId,
    productId,
    farmerId, // Add optional farmerId
  }

  const [activeTab, setActiveTab] = useState(3); // Set to Reviews tab by default

  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-0">
      <div className="flex flex-wrap border-b border-gray-200">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-2 md:px-4 text-xs md:text-sm font-medium focus:outline-none ${
              activeTab === index
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {activeTab === 3 && <ReviewsContent review={review} />}
      </div>
    </div>
  );
}