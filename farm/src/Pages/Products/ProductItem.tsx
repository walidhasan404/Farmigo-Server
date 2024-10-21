import React, { useState } from "react";
import { Product } from "../../Types/types";
import { Eye, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductItemProps {
  product: Product;
  handleAddToCart: (product: Product, quantity: number) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({
  product,
  handleAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1); // State to manage quantity

  return (
    <Link
      to={`/products/${product._id}`}
      className="bg-white border border-gray-200 rounded-lg overflow-hidden"
    >
      <div className="relative">
        {product.stock && (
          <span className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 text-xs font-bold rounded">
            SALE
          </span>
        )}
        <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
          <Eye className="w-5 h-5 text-gray-600" />
        </button>
        <img
          src={product.images[0]}
          alt={product.product_name}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500">{product.category}</p>
        <h3 className="font-semibold text-lg mt-1 h-8 overflow-hidden">
          {product.product_name}
        </h3>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold">
              ${product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>
          {product.rating && (
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < product.rating! ? "text-green-600" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1 text-base text-gray-500">
                ({product.rating})
              </span>
            </div>
          )}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center border rounded-md">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 bg-gray-100 hover:bg-gray-200"
            >
              <Minus className="w-4 h-4" />
            </button>
            <input
              type="text"
              value={quantity}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                setQuantity(isNaN(val) ? 1 : Math.max(1, val));
              }}
              className="w-12 text-center border-x"
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 bg-gray-100 hover:bg-gray-200"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
        <button
          className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-700 transition duration-300"
          onClick={() => handleAddToCart(product, quantity)}
        >
          ADD TO CART
        </button>
      </div>
    </Link>
  );
};

export default ProductItem;
