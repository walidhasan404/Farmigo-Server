import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ChatApp from "../Chat/ChatApp";
import { useAuth } from "../../Authentication/AuthProvider/AuthContext";
import useGetData from "../../common/Hooks/useGetData";
import Review from "../../Pages/Review/Review";

interface Product {
    _id: string;
    product_name: string;
    category: string;
    price: number;
    quantity: number;
    description: string;
    rating: number;
    farmer_id: string;
    images: string[];
    created_at: string;
}

const ProductDetails = () => {
    const navigate  = useNavigate();
    const { userAuth }  = useAuth()
    let customerId : string = "";
if(userAuth?.token){
    const token = userAuth?.token ?? "";
   const {userId} = useGetData(token)
    customerId = userId
}
    
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isChatOpen, setIsChatOpen] = useState(false);
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_API+"/products");
                const productData = response.data.data.find((item: Product) => item._id === id);

                if (productData) {
                    setProduct(productData);
                    fetchRelatedProducts(productData.category)
                } else {
                    setError("Product not found");
                }
            } catch (err) {
                setError("Error fetching product details");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
        
    }, [id]);

    const fetchRelatedProducts = async (category: string) => {
        try {
            console.log(category);
            const res = await axios.get(import.meta.env.VITE_API + "/products");
            const filteredProducts = res.data.data.filter((item: Product) => item.category.toLowerCase() === category.toLowerCase());
            setRelatedProducts(filteredProducts);
            console.log('====================================');
            console.log(filteredProducts);
            
        } catch (err) {
            setError("Error fetching related products");
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const openChat = () => {
        if(userAuth?.token){
            setIsChatOpen(true)
        }else{
            navigate('/login')
        }
       };
    const closeChat = () => setIsChatOpen(false);
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            {product && (
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        {/* Product Info Section */}
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.category.toUpperCase()}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{product.product_name}</h1>
                            <div className="flex mb-4">
                                <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
                                {/* <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
                                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a> */}
                            </div>
                            <p className="leading-relaxed mb-4">{product.description}</p>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Rating</span>
                                <span className="ml-auto text-gray-900">{product.rating}</span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Quantity</span>
                                <span className="ml-auto text-gray-900">{product.quantity}</span>
                            </div>
                            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                <span className="text-gray-500">Price</span>
                                <span className="ml-auto text-gray-900">${product.price.toFixed(2)}</span>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
                                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
                                {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <span className="text-gray-200">.</span><svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg><span className="text-gray-200">.</span>
                                </button> */}
                            </div>
                        </div>

                        {/* Product Image Section */}
                        <img
                            alt="ecommerce"
                            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                            src={product.images[0]}
                        />
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                          <div> Owner Name :  {product.farmer_id} </div>
                        
                          <button className="bg-green-500 text-white px-4 py-2 rounded"  onClick={openChat}> Chat Now </button>
                     </div>
                      {/* Modal */}
                    {isChatOpen && (
                        <div
                        className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
                            isChatOpen ? "opacity-100" : "opacity-0"
                        }`}
                        >
                        <div
                            className="bg-white w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 p-5 rounded-lg shadow-lg relative transition-transform duration-300 ease-in-out transform scale-100"
                            style={{ maxHeight: "90vh", overflowY: "auto" }}
                        >
                            <button
                            className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full"
                            onClick={closeChat}
                            >
                            X
                            </button>
                            {/* ChatApp component inside modal */}
                            <ChatApp farmer_id={product.farmer_id} customer_id={customerId ?? ""} userImg={userAuth?.profile_img?? ""}/>
                        </div>
                        </div>
                    )}
                    {/* review PAenl */}
                     <Review userId={customerId} farmerId={product.farmer_id} productId={product._id}/>

                    {/* Related Products */}
                    {relatedProducts.length > 0 && (
                        <div className="related-products mt-12">
                            <h2 className="text-2xl font-medium text-gray-900 mb-4">Related Products</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {relatedProducts.slice(0,4).map((relatedProduct) => (
                                    <div key={relatedProduct._id} className="product-card border p-4 rounded-lg">
                                        <Link to={`/products/${relatedProduct._id}`}>
                                            <img
                                                alt={relatedProduct.product_name}
                                                className="w-full h-48 object-cover object-center mb-4"
                                                src={relatedProduct.images[0]}
                                            />
                                            <h3 className="text-gray-900 text-lg font-medium">{relatedProduct.product_name}</h3>
                                            <p className="text-gray-600">${relatedProduct.price.toFixed(2)}</p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </section>
    );
};

export default ProductDetails;
