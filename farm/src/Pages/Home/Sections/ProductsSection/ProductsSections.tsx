import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem from "../../../Products/ProductItem";
import Loading from "../../../../Shared/Loading/Loading";
import Header from "../../../../Components/Header/Header";

const ProductsSection = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [visibleCount, setVisibleCount] = useState<number>(8);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_API + "/products");
                // i working here
                setProducts(response.data.data);
              
                setLoading(false);
            } catch {
                setError("Failed to load data.");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 6);
    };

   /*  if (loading) {
        return <div>Loading Data...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    } */

    // Get the latest products based on the length of the products array
    const latestProducts = products.slice(-visibleCount);

    return (
        <div className="pt-10 sm:pt-16 lg:pt-24 max-w-7xl mx-auto">

            <Header title="Trending Product" description="Shop our latest collection of fresh fruits and vegetables." /> 

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-2xl mx-auto gap-4">
            { loading ? <Loading smallHeight={true}/> : Array.isArray(latestProducts) && latestProducts.length > 0 ? (
                latestProducts.map((product) => (
                    <ProductItem key={product._id} product={product} handleAddToCart={handleShowMore} />
                ))
            ) : (
                <div className="col-span-full text-center p-4 text-red-500">
                    {latestProducts === null ? 'Error: Data not available.' : `No products found. Please check back later. ${error}`}
                </div>
            )}
</div>
          
        </div>
    );
};

export default ProductsSection;
