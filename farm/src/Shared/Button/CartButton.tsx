
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../../Authentication/AuthProvider/AuthContext";
import { ShoppingBasket } from 'lucide-react';

const CartButton = () => {
    const {cartItems} = useAuth()
    const navigate = useNavigate();
  return (
    <div>
      {/*    <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => navigate('/cart')}>
          <span className="mr-2">🛒</span> {cartItems} item{cartItems !== 1 ? 's' : ''}
        </button> */}

        <button className="lg:bg-green-700 lg:text-white lg:px-4 lg:py-2 rounded-full flex items-center md:bg-green-700 md:text-white md:px-3 md:py-2" onClick={() => navigate('/cart')}>
          <ShoppingBasket />
            <span className="ml-2"> {cartItems} item{cartItems !== 1 ? 's' : ''}</span>
        </button>
    </div>
  )
}

export default CartButton