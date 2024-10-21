import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
    _id: string;
    product_name: string;
    description: string;
    category: string;
    price: number;
    quantity: number;
    rating: number;
    images: string[];
}

const AllProducts: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await axios.get<{ data: Product[] }>("https://farmigo-server.onrender.com/api/v1/products");
            setProducts(response.data.data);
        } catch (err) {
            setError('Error fetching products');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this product?')) return;

        try {
            await axios.delete(`https://farmigo-server.onrender.com/api/v1/products/${id}`);
            setProducts((prev) => prev.filter((product) => product._id !== id));
        } catch (err) {
            setError('Error deleting product');
        }
    };

    const handleUpdate = async (id: string) => {
        alert(`Edit product with ID: ${id}`);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="p-8 bg-gradient-to-r from-green-100 via-green-300 to-green-500 min-h-screen">
            <h1 className="text-4xl font-bold mb-6 text-center text-white">All Products</h1>
            <table className="min-w-full bg-white shadow-lg rounded-lg">
                <thead>
                    <tr className="bg-green-700 text-white text-left">
                        <th className="py-3 px-5">Product Name</th>
                        <th className="py-3 px-5">Category</th>
                        <th className="py-3 px-5">Price</th>
                        <th className="py-3 px-5">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id} className="hover:bg-green-100">
                            <td className="py-3 px-5 border-b">{product.product_name}</td>
                            <td className="py-3 px-5 border-b">{product.category}</td>
                            <td className="py-3 px-5 border-b">${product.price}</td>
                            <td className="py-3 px-5 border-b">
                                <button
                                    className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-700 transition-shadow shadow-md"
                                    onClick={() => handleUpdate(product._id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700 transition-shadow shadow-md"
                                    onClick={() => handleDelete(product._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    
};

export default AllProducts;