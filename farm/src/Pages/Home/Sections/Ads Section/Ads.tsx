

function Ads() {
  return (
    <div className="flex justify-center items-center mt-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative rounded-lg shadow-md p-6 flex flex-col items-start">
            <img src="https://freshgo-webibazaar.myshopify.com/cdn/shop/files/latestbanner-1_87457632-c642-4204-9027-18b09c85d83b.jpg?v=1641881928" alt="Oranges and leaves" className="rounded-lg w-full" />
            <div className="absolute lg:top-20 lg:right-10 md:top-12 md:right-10 top-20 right-10">
                <div className="text-green-600 text-sm mb-2">Summer</div>
                <div className="lg:text-2xl text-2xl md:text-xl font-bold text-gray-800 mb-2">Fresh Fruit, Vegetables</div>
                <div className="text-gray-500 lg:mb-4 mb-4 md:mb-2">Up To 25% Off Fruit</div>
                <button className="bg-green-600 text-white lg:px-4 px-4 md:px-2 py-2 rounded md:text-sm text-md">SHOP NOW</button>
            </div>
        </div>
        <div className="relative rounded-lg shadow-md p-6 flex flex-col items-start">
            <img src="https://freshgo-webibazaar.myshopify.com/cdn/shop/files/latestbanner-1_87457632-c642-4204-9027-18b09c85d83b.jpg?v=1641881928" alt="Avocados and leaves" className="rounded-lg w-full" />
            <div className="absolute lg:top-20 lg:right-10 md:top-12 md:right-10 top-20 right-10">
                <div className="text-green-600 text-sm mb-2">Summer</div>
                <div className="lg:text-2xl md:text-xl text-2xl font-bold text-gray-800 mb-2">Fresh Fruit, Vegetables</div>
                <div className="text-gray-500 lg:mb-4 md:mb-2 mb-4">Up To 25% Off Fruit</div>
                <button className="bg-green-600 text-white lg:px-4 px-4 md:px-2 py-2 rounded md:text-sm text-md">SHOP NOW</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Ads