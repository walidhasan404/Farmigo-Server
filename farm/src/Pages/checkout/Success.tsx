import React from 'react';
import { Link } from 'react-router-dom';

const Success: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
      <p className="text-lg text-gray-700 mb-6">Thank you for your purchase. Your payment has been processed successfully.</p>
      <Link to="/" className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
        Go to Homepage
      </Link>
    </div>
  );
};

export default Success;