
const products = [
    {
        name: "Patimax Fragrance Long...",
        items: "100 Items",
        coupon: "$flat",
        price: "-15%",
        amount: "$270",
        flag: "https://placehold.co/20x20?text=ES",
        image: "https://placehold.co/50x50?text=Product+Image"
    },
    {
        name: "Nulo MedalSeries Adult Cat...",
        items: "100 Items",
        coupon: "$flat",
        price: "-15%",
        amount: "$270",
        flag: "https://placehold.co/20x20?text=IN",
        image: "https://placehold.co/50x50?text=Product+Image"
    },
    {
        name: "Pedigree Puppy Dry Dog...",
        items: "100 Items",
        coupon: "$flat",
        price: "-15%",
        amount: "$270",
        flag: "https://placehold.co/20x20?text=GB",
        image: "https://placehold.co/50x50?text=Product+Image"
    },
    {
        name: "Biscoito Premier Cookie...",
        items: "100 Items",
        coupon: "$flat",
        price: "-15%",
        amount: "$270",
        flag: "https://placehold.co/20x20?text=BR",
        image: "https://placehold.co/50x50?text=Product+Image"
    },
    {
        name: "Pedigree Adult Dry Dog...",
        items: "100 Items",
        coupon: "$flat",
        price: "-15%",
        amount: "$270",
        flag: "https://placehold.co/20x20?text=FR",
        image: "https://placehold.co/50x50?text=Product+Image"
    }
];
const ProductsShow = () => {
  return (
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold">Top Products</h1>
                    <a href="#" className="text-blue-500">View all</a>
                </div>
                <div className="overflow-x-auto">
                    <ul className="min-w-full">
                        {products.map((product, index) => (
                            <li key={index} className="flex items-center mb-4 min-w-full">
                                <img className="w-12 h-12 rounded-full mr-4" src={product.image} alt="Product Image" />
                                <div className="flex-1">
                                    <div className="font-bold">{product.name}</div>
                                    <div className="text-gray-500">{product.items}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-gray-500">Coupon Code</div>
                                    <div className="font-bold">{product.coupon}</div>
                                </div>
                                <img className="w-5 h-5 ml-4" src={product.flag} alt="Country Flag" />
                                <div className="text-right ml-4">
                                    <div className="font-bold text-red-500">{product.price}</div>
                                    <div className="text-gray-500">{product.amount}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
    
  )
}

export default ProductsShow