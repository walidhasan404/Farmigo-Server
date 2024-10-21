import { Link } from "react-router-dom";


const Categories = () => {
    return (

        <div className="grid grid-cols-3 md:max-h-[500px] max-h-[300px] gap-2 md:gap-3 max-w-screen-xl mx-auto">
            {/* col 1 */}
            {/* Vegetable Farming */}
            <Link to={'/products/vegetable'} className="block">
                <div className="rounded-xl relative h-full overflow-hidden group">
                    <img
                        className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                        src="https://us.images.westend61.de/0001488195pw/smiling-farm-worker-carrying-vegetable-box-while-standing-at-farm-MJRF00311.jpg"
                        alt="Vegetable Farming"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 rounded-xl"></div>
                    {/* Text Overlay */}
                    <div className="absolute bottom-5 left-5 text-white text-xl font-bold">
                        Vegetable Farming
                    </div>
                </div>
            </Link>

            {/* col 2 */}
            <div className="rounded-xl grid grid-rows-2 gap-3">
                {/* Grain & Cereal Farming  */}
                <Link to={'/products/grain & cereal'} className="block">
                    <div className="rounded-xl relative md:h-[250px] h-[150px] overflow-hidden group">
                        <img
                            className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                            src="https://www.world-grain.com/ext/resources/2022/05/10/Cereal-grains_cr-Adobe-Stock_E.jpg?height=635&t=1696274291&width=1200"
                            alt="Grain & Cereal Farming"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 rounded-xl"></div>
                        <div className="absolute bottom-5 left-5 text-white text-xl font-bold">
                            Grain & Cereal Farming
                        </div>
                    </div>
                </Link>

                {/* Poultry Farming */}
                <Link to={'/products/poultry'} className="block">
                    <div className="rounded-xl relative md:h-[250px] h-[150px] overflow-hidden group">
                        <img
                            className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                            src="https://www.sruc.ac.uk/media/y1mbwi3h/chicken-on-grass.jpg"
                            alt="Poultry Farming"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 rounded-xl"></div>
                        <div className="absolute bottom-5 left-5 text-white text-xl font-bold">
                            Poultry Farming
                        </div>
                    </div>
                </Link>
            </div>

            {/* col 3 */}
            <div className="rounded-xl grid grid-rows-2 gap-3">
                <Link to={'/products/fruit'} className="block">
                    <div className="rounded-xl relative md:h-[250px] h-[150px] overflow-hidden group">
                        <img
                            className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                            src="https://ogden_images.s3.amazonaws.com/www.grit.com/images/2017/04/05204041/AdobeStock_283505441.jpeg"
                            alt="Your Text Here"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 rounded-xl"></div>
                        <div className="absolute bottom-5 left-5 text-white text-xl font-bold">
                            Fruit Farming
                        </div>
                    </div>
                </Link>

                <Link to={'/products/dairy'} className="block">
                    <div className="rounded-xl relative md:h-[250px] h-[150px] overflow-hidden group">
                        <img
                            className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                            src="https://d27p2a3djqwgnt.cloudfront.net/wp-content/uploads/2017/06/05050021/holstein-cattle-2318436_1280.jpg"
                            alt="Your Text Here"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 rounded-xl"></div>
                        <div className="absolute bottom-5 left-5 text-white text-xl font-bold">
                            Dairy Farming
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Categories;