import React, { useEffect, useState } from 'react';
import { Product } from '../../Types/types';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
const navigate = useNavigate();
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart);
  }, []);

  

  // Function to update localStorage and state when cart changes
  const updateCart = (updatedCart: Product[]) => {
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Handle removing an item from the cart
  const handleRemoveItem = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    updateCart(updatedCart);
  };

  // Handle changing the quantity of an item
  const handleQuantityChange = (index: number, quantity: number) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = quantity;
    updateCart(updatedCart);
  };

  return (
    <div className="container mx-auto p-4">
      <nav className="text-sm mb-8">
        <a href="/" className="text-gray-500 hover:text-gray-700">Home</a>
        <span className="mx-2 text-gray-400">&gt;</span>
        <span className="text-gray-700">Your Shopping Cart</span>
      </nav>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-0">Your Cart</h1>
        <a href="/products" className="text-green-600 hover:text-green-700">Continue shopping</a>
      </div>

      <div className="hidden sm:grid grid-cols-3 gap-4 font-semibold mb-4 pb-2 border-b">
        <div>PRODUCT</div>
        <div className="text-center">QUANTITY</div>
        <div className="text-right">TOTAL</div>
      </div>
    
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="flex flex-col sm:grid sm:grid-cols-3 gap-4 items-start sm:items-center py-4 border-b">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <img src={item.images[0]} alt={item.product_name} className="w-20 h-20 object-cover rounded-md" />
              <div>
                <h3 className="font-semibold">{item.product_name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500">Size: {item.stock}</p>
              </div>
            </div>
            <div className="flex justify-between sm:justify-center items-center w-full sm:w-auto mt-4 sm:mt-0">
              <span className="sm:hidden font-semibold">Quantity:</span>
              <div className="flex items-center">
                <button 
                  onClick={() => handleQuantityChange(index ,-1)} 
                  className="p-1 border rounded-md hover:bg-gray-100"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <input
                    id={`quantity-${index}`}
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                    className="border rounded w-16 text-center"
                  />
                <button 
                  onClick={() => handleQuantityChange(index, 1)} 
                  className="p-1 border rounded-md hover:bg-gray-100"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button className="sm:ml-2 p-1 text-gray-500 hover:text-red-500" onClick={() => handleRemoveItem(index)}>
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <div className="flex justify-between items-center w-full sm:w-auto sm:justify-end mt-4 sm:mt-0">
              <span className="sm:hidden font-semibold">Total:</span>
              <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          </div>




            // Render the cart item with quantity and remove button 
           /*  <div key={index} className="flex items-center justify-between mb-4 border-b pb-4">
              <div>
                <h2 className="font-semibold">{item.product_name}</h2>
                <div className="flex items-center">
                  <label htmlFor={`quantity-${index}`} className="text-sm text-gray-500 mr-2">
                    Quantity:
                  </label>
                  <input
                    id={`quantity-${index}`}
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                    className="border rounded w-16 text-center"
                  />
                </div>
              </div>
              <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => handleRemoveItem(index)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div> */
          ))}
          <div className="mt-8 space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Subtotal:</span>
          <span className="text-xl sm:text-2xl font-bold">${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
        </div>
        <p className="text-sm text-gray-500">Taxes and shipping calculated at checkout</p>
        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md font-semibold" onClick={() => navigate('/checkout')}>
          Check Out
        </button>
      </div>
         {/*  <div className="mt-4">
            <p className="text-lg font-bold">
              Total: $
              {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </p>
          </div> */}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;



