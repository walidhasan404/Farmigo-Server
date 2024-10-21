

const CartTable = () => {
  return (
    <div className="p-8">
                    <div className="text-sm text-gray-500 mb-4">
                        <span className="text-red-500">Dashboard</span> &gt; Shopping Cart
                    </div>
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-2/3 overflow-x-auto">
                            <table className="w-full text-left min-w-max">
                                <thead>
                                    <tr className="border-b">
                                        <th className="py-2">PHOTO</th>
                                        <th className="py-2">NAME</th>
                                        <th className="py-2">QUANTITY</th>
                                        <th className="py-2">PRICE</th>
                                        <th className="py-2">TOTAL</th>
                                        <th className="py-2"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="py-4">
                                            <img src="https://placehold.co/60x60" alt="Digital clock" className="w-16 h-16 rounded-lg" />
                                        </td>
                                        <td className="py-4">Digital clock</td>
                                        <td className="py-4">
                                            <input type="number" value="1" className="w-12 text-center border rounded-lg" />
                                        </td>
                                        <td className="py-4">$1.190,90</td>
                                        <td className="py-4">$1.190,90</td>
                                        <td className="py-4">
                                            <button className="text-red-500 border border-red-500 rounded-lg p-2">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-4">
                                            <img src="https://placehold.co/60x60" alt="Toy car" className="w-16 h-16 rounded-lg" />
                                        </td>
                                        <td className="py-4">Toy car</td>
                                        <td className="py-4">
                                            <input type="number" value="1" className="w-12 text-center border rounded-lg" />
                                        </td>
                                        <td className="py-4">
                                            <span className="line-through text-gray-400">$322.53</span> <span className="text-green-500">$139.58</span>
                                            <div className="text-green-500 text-sm">86% off</div>
                                        </td>
                                        <td className="py-4">$139,58</td>
                                        <td className="py-4">
                                            <button className="text-red-500 border border-red-500 rounded-lg p-2">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-4">
                                            <img src="https://placehold.co/60x60" alt="Sunglasses" className="w-16 h-16 rounded-lg" />
                                        </td>
                                        <td className="py-4">Sunglasses</td>
                                        <td className="py-4">
                                            <input type="number" value="2" className="w-12 text-center border rounded-lg" />
                                        </td>
                                        <td className="py-4">$50,90</td>
                                        <td className="py-4">$101,80</td>
                                        <td className="py-4">
                                            <button className="text-red-500 border border-red-500 rounded-lg p-2">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-4">
                                            <img src="https://placehold.co/60x60" alt="Cake" className="w-16 h-16 rounded-lg" />
                                        </td>
                                        <td className="py-4">Cake</td>
                                        <td className="py-4">
                                            <input type="number" value="1" className="w-12 text-center border rounded-lg" />
                                        </td>
                                        <td className="py-4">$10,50</td>
                                        <td className="py-4">$10,50</td>
                                        <td className="py-4">
                                            <button className="text-red-500 border border-red-500 rounded-lg p-2">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="w-full lg:w-1/3">
                            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                                <h2 className="text-lg font-semibold mb-4">Price</h2>
                                <div className="flex justify-between mb-2">
                                    <span>Sub Total :</span>
                                    <span>$1.442,78</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Shipping :</span>
                                    <span>Free</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Tax(18%) :</span>
                                    <span>$259.70</span>
                                </div>
                                <div className="flex justify-between font-semibold text-lg">
                                    <span>Total :</span>
                                    <span>$1.702,48</span>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                                <div className="flex mb-4">
                                    <input type="text" placeholder="Coupon Code" className="border rounded-l-lg p-2 flex-grow" />
                                    <button className="bg-gray-200 text-gray-600 rounded-r-lg px-4">Apply</button>
                                </div>
                                <div>
                                    <label className="block mb-2">Order note:</label>
                                    <textarea className="w-full border rounded-lg p-2" rows={4}></textarea>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <button className="bg-red-500 text-white rounded-lg px-4 py-2">All Clear</button>
                                <button className="bg-orange-500 text-white rounded-lg px-4 py-2">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default CartTable