

const BuyProducts = () => {
  return (
    <div className="max-w-4xl mt-10 p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Best Shop Sellers</h1>
                <a href="#" className="text-blue-500">View all <i className="fas fa-chevron-down"></i></a>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr>
                            <th className="pb-3">Shop</th>
                            <th className="pb-3">Categories</th>
                            <th className="pb-3">Total</th>
                            <th className="pb-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sellers.map((seller, index) => (
                            <tr key={index} className="border-t">
                                <td className="py-3 flex items-center">
                                    <img src={seller.image} alt={`${seller.name}'s profile`} className="w-10 h-10 rounded-full mr-3" />
                                    <div>
                                        <div className="font-bold">{seller.name}</div>
                                        <div className="text-gray-500 text-sm">{seller.purchases} Purchases</div>
                                    </div>
                                </td>
                                <td className="py-3">{seller.categories}</td>
                                <td className="py-3">{seller.total}</td>
                                <td className="py-3 flex items-center">
                                    <div className={`w-3 h-3 rounded-full ${seller.statusColor} mr-2`}></div>
                                    <span className="text-gray-500">100%</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default BuyProducts

const sellers = [
    { name: "Robert", purchases: 73, categories: "Kitchen, Pets", total: "$1,000", statusColor: "bg-green-500", image: "https://placehold.co/50x50?text=Robert" },
    { name: "Calvin", purchases: 66, categories: "Health, Grocery", total: "$4,000", statusColor: "bg-orange-500", image: "https://placehold.co/50x50?text=Calvin" },
    { name: "Dwight", purchases: 15890, categories: "Electronics", total: "$2,700", statusColor: "bg-gray-300", image: "https://placehold.co/50x50?text=Dwight" },
    { name: "Cody", purchases: 15, categories: "Movies, Music", total: "$2,100", statusColor: "bg-green-500", image: "https://placehold.co/50x50?text=Cody" },
    { name: "Bruce", purchases: 127, categories: "Sports, Fitness", total: "$4,400", statusColor: "bg-yellow-500", image: "https://placehold.co/50x50?text=Bruce" },
    { name: "Jorge", purchases: 30, categories: "Toys, Baby", total: "$4,750", statusColor: "bg-teal-500", image: "https://placehold.co/50x50?text=Jorge" },
    { name: "Kristin Watson", purchases: 93, categories: "Gift Cards", total: "$1,000", statusColor: "bg-purple-500", image: "https://placehold.co/50x50?text=Kristin" },
];
