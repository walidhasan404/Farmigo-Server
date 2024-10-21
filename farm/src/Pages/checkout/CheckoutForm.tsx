import React, { useEffect, useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import toast from "react-hot-toast";

// Load Stripe
const stripePromise = loadStripe(
  "pk_test_51PNslyRu20g9BDQ6EP1sOdhVVaoYB9NdGR4f910yxhq44orLZmg3DYD6zzYSI2PWcVFMyYiKtCQnbflFZa0006TX00CyIdkzAG"
);

// Type definitions for the order items
interface OrderItem {
  _id: string;
  product_name: string;
  quantity: number;
  price: number;
  image: string;
}

const CheckoutForm = () => {
  const [email, setEmail] = useState<string>("");
  const [country, setCountry] = useState<string>("Bangladesh");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [apartment, setApartment] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [division, setDivision] = useState<string>("Dhaka");
  const [postalCode, setPostalCode] = useState<string>("");
  const [saveInfo, setSaveInfo] = useState<boolean>(false);
  const [shippingMethod, setShippingMethod] = useState<string>("Standard");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [clientSecret, setClientSecret] = useState<string>("");
  const [transactionId, setTransactionId] = useState<string>("");

  const stripe = useStripe();
  const elements = useElements();

  // Fetch items from the cart (mocking local storage for demo purposes)
  const orderItems: OrderItem[] = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );

  // Calculate the subtotal
  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Define shipping costs based on shipping method
  const shippingCosts: { [key: string]: number } = {
    Standard: 100,
    Express: 300,
    "Same-Day": 500,
    "Cash-on-Delivery": 200,
  };

  const shippingCost = shippingCosts[shippingMethod];
  const total = subtotal + shippingCost || 0;

  // Fetch payment intent from the backend and set clientSecret
  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const { data } = await axios.post(
          "https://farmigo-backend.onrender.com/api/order/create-payment-intent",
          { price: total }
        );
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error("Error creating payment intent:", error);
        toast.error("Failed to create payment intent.");
      }
    };
    if (total > 0) createPaymentIntent();
  }, [total]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setLoading(true);

    // Make sure Stripe.js and Elements are loaded
    if (!stripe || !elements) {
      toast.error("Stripe.js not loaded. Please try again later.");
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      toast.error("Card details not found. Please try again.");
      setLoading(false);
      return;
    }

    try {
      // Create payment method and confirm the payment
      const { error: paymentMethodError, paymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: {
            email,
            name: `${firstName} ${lastName}`,
          },
        });

      if (paymentMethodError) {
        console.error("Error creating payment method:", paymentMethodError);
        toast.error(paymentMethodError.message || "Payment failed.");
        setLoading(false);
        return;
      }

      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: paymentMethod.id,
        });

      if (confirmError) {
        console.error("Error confirming payment:", confirmError);
        toast.error(confirmError.message || "Payment confirmation failed.");
        setLoading(false);
        return;
      }

      // Payment success, process the order and payment
      if (paymentIntent?.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        toast.success("Payment succeeded!");

        // Prepare payment record
        const paymentData = {
          email,
          price: paymentIntent.amount / 100,
          transactionId: paymentIntent.id,
          date: new Date(),
          status: "pending",
          country,
          firstName,
          lastName,
          address,
          apartment,
          city,
          division,
          postalCode,
          saveInfo,
          shippingMethod,
          shippingCost,
          total,
          orderItems: orderItems.map((item) => ({
            id: item._id,
            quantity: item.quantity,
            price: item.price,
          })),
        };


        // Post the payment data and order details to the backend
        await axios.post("https://farmigo-backend.onrender.com/api/order/new-collection", {
          ...paymentData,
        })
        .then((res) => {
          console.log(res);

           axios
            .post(
              "https://farmigo-backend.onrender.com/api/order/create-checkout",
              {...paymentData, orderId: res.data.orderId},
              { withCredentials: true }
            )
            .then((res) => {
              
              if(res.data.success_url) {
                window.location.href = res.data.success_url;
              }
            })
            .catch(() => {
              toast.error("An error occurred while processing your payment.");
            });
          
        })


       setSuccessMessage(
           
           `Payment succeeded. Transaction ID: ${paymentIntent.id} ${loading} ${transactionId}`
        );
        localStorage.removeItem("cart");
      }
    } catch (error) {
      console.error("Payment or order creation error:", error);
      toast.error("An error occurred while processing your payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center p-6">
      <div className="w-full max-w-5xl bg-white shadow rounded-lg overflow-hidden">
        <div className="flex flex-col items-center md:items-start md:flex-row">
          <div className="w-full p-8">
            <h2 className="text-2xl font-semibold mb-6">Checkout</h2>
            <form>
              {/* Contact Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <input
                  type="email"
                  placeholder="Email or mobile phone number"
                  className="w-full p-2 border rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="flex items-center mt-2">
                  <input type="checkbox" id="newsletter" className="mr-2" />
                  <label htmlFor="newsletter">
                    Email me with news and offers
                  </label>
                </div>
              </div>

              {/* Delivery Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Delivery</h3>
                <div className="mb-4">
                  <select
                    className="w-full p-2 border rounded"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option>Bangladesh</option>
                  </select>
                </div>
                <div className="flex mb-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-1/2 p-2 border rounded mr-2"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-1/2 p-2 border rounded"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full p-2 border rounded mb-4"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="w-full p-2 border rounded mb-4"
                  value={apartment}
                  onChange={(e) => setApartment(e.target.value)}
                />
                <div className="flex mb-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="w-1/3 p-2 border rounded mr-2"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <select
                    className="w-1/3 p-2 border rounded mr-2"
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                  >
                    <option>Dhaka</option>
                    <option>Chittagong</option>
                    <option>Khulna</option>
                    <option>Rajshahi</option>
                    <option>Barishal</option>
                    <option>Sylhet</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Postal code"
                    className="w-1/3 p-2 border rounded"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="saveInfo"
                    checked={saveInfo}
                    onChange={() => setSaveInfo(!saveInfo)}
                    className="mr-2"
                  />
                  <label htmlFor="saveInfo">
                    Save this information for next time
                  </label>
                </div>
              </div>

              {/* Shipping Method Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Shipping method</h3>
                <div className="bg-gray-100 p-4 rounded">
                  {Object.keys(shippingCosts).map((method) => (
                    <label key={method} className="flex items-center mb-2">
                      <input
                        type="radio"
                        name="shippingMethod"
                        value={method}
                        checked={shippingMethod === method}
                        onChange={(e) => setShippingMethod(e.target.value)}
                        className="mr-2"
                      />
                      {method} - {shippingCosts[method]} ৳
                    </label>
                  ))}
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary Section */}
          <div className="w-full bg-gray-100 p-8">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            {orderItems.map((item) => (
              <div key={item._id} className="flex justify-between mb-4">
                <div>
                  <p className="font-semibold">{item.product_name}</p>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>
                <div className="font-semibold">
                  ৳{(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
            <div className="flex justify-between border-t border-gray-300 pt-4">
              <p>Subtotal</p>
              <p>৳{subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>৳{shippingCost || 0}</p>
            </div>
            <div className="flex justify-between font-bold">
              <p>Total</p>
              <p>৳{total.toFixed(2)}</p>
            </div>

            <form onSubmit={handleSubmit}>
              <CardElement className="border mt-8 p-2 rounded mb-4" />
              <p className="text-green-600 text-center">{successMessage}</p>
              <button
                // onClick={handleSubmit}
                type="submit"
                className="w-full mt-2 bg-blue-500 text-white p-2 rounded"
              >
                Pay Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component with Stripe's Elements wrapper
const Checkout = () => (
  <div className=" ">
    <div className=" m-auto border ">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  </div>
);

export default Checkout;