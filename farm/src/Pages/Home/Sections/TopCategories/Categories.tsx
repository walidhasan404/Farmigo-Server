import { useEffect, useState } from "react";
interface Category {
  name: string;
  image: string;
}

export default function FruitCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("/categoriesData.json")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error loading categories:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-5xl font-bold text-center mb-6 md:mb-4">
        Top Category
      </h2>
      <p className="text-center mb-10">
        Our best category product is here now you can check those items.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-36 h-36 rounded-full overflow-hidden bg-gray-200">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg mt-2 font-medium text-center text-gray-800">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
