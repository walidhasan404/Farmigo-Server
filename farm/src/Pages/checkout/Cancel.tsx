import React from 'react';
import { Link } from 'react-router-dom';

const Cancel: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Canceled</h1>
      <p className="text-lg text-gray-700 mb-6">Your payment has been canceled. If you have any questions, feel free to contact us.</p>
      <Link to="/" className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">
        Go to Homepage
      </Link>
    </div>
  );
};

export default Cancel;