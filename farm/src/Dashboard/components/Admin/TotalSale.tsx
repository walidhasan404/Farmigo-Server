

const TotalSale = () => {
  return (
    <div className="p-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">Today's Sales</h1>
                                <p className="text-gray-500">Sales Summary</p>
                            </div>
                            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
                                <i className="fas fa-download mr-2"></i> Export
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-pink-100 p-4 rounded-lg">
                                <div className="flex items-center mb-2">
                                    <i className="fas fa-chart-bar text-pink-500 text-2xl"></i>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">$1k</h2>
                                <p className="text-gray-500">Total Sales</p>
                                <p className="text-blue-500 text-sm">Last day +8%</p>
                            </div>
                            <div className="bg-yellow-100 p-4 rounded-lg">
                                <div className="flex items-center mb-2">
                                    <i className="fas fa-shopping-bag text-orange-500 text-2xl"></i>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">300</h2>
                                <p className="text-gray-500">Total Order</p>
                                <p className="text-blue-500 text-sm">Last day +5%</p>
                            </div>
                            <div className="bg-green-100 p-4 rounded-lg">
                                <div className="flex items-center mb-2">
                                    <i className="fas fa-tag text-green-500 text-2xl"></i>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">5</h2>
                                <p className="text-gray-500">Sold</p>
                                <p className="text-blue-500 text-sm">Last day +1.2%</p>
                            </div>
                            <div className="bg-purple-100 p-4 rounded-lg">
                                <div className="flex items-center mb-2">
                                    <i className="fas fa-users text-purple-500 text-2xl"></i>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">8</h2>
                                <p className="text-gray-500">Customers</p>
                                <p className="text-blue-500 text-sm">Last day +0.5%</p>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default TotalSale