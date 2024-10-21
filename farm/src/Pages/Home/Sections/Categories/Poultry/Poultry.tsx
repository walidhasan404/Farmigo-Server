import axios from "axios";
import { useEffect, useState } from "react";

const Poultry = () => {
    const [poultry, setPoultry] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get("/data.json")
            .then((res) => {
                const filteredPoultry = res.data.filter((item: any) => item.category === "Poultry");
                setPoultry(filteredPoultry);
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to load data.");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading Data...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-screen-2xl mx-auto gap-4">
            {poultry.length > 0 ? (
                poultry.map((item, index) => (
                    <div key={index} className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                        <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                            <img className="object-cover" src={item.imageUrl} alt="product image" />
                            <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{item.category}</span>
                        </a>
                        <div className="mt-4 px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl tracking-tight text-slate-900">{item.name}</h5>
                            </a>
                            <div className="mt-2 mb-5 flex items-center justify-between">
                                <p>
                                    <span className="text-3xl font-bold text-slate-900">${item.price}</span>
                                    <span className="text-sm text-slate-900 line-through">${item.originalPrice}</span>
                                </p>
                            </div>
                            <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Add to cart
                            </a>
                        </div>
                    </div>
                ))
            ) : (
                <div>No Poultry products found.</div>
            )}
        </div>
    );
};

export default Poultry;
