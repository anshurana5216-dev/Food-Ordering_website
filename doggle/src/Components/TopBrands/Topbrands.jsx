import React from "react";

const TopBrands = ({ setSelectedBrand }) => {
  const brands = [
    {
      name: "McDonald's",
      image:
        "https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png",
    },
    {
      name: "KFC",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/bf/KFC_logo.svg",
    },
    {
      name: "Starbucks",
      image:
        "https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg",
    },
    {
      name: "Domino's",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/74/Dominos_pizza_logo.svg",
    },
    {
      name: "Burger King",
      image:
        "https://pngimg.com/uploads/burger_king/burger_king_PNG4.png",
    },
    {
      name: "Subway",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5c/Subway_2016_logo.svg",
    },
    {
      name: "Pizza Hut",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d2/Pizza_Hut_logo.svg",
    },
    {
      name: "Bikanervala",
      image:
        "https://static.cdnlogo.com/logos/b/86/bikanervala_800.png",
    },
    {
      name: "Cupcake House",
      image:
        "https://images.unsplash.com/photo-1426869981800-95ebf51ce900?w=500",
    },
  ];

  return (
    <div className="w-[95%] md:w-[90%] mx-auto py-8 md:py-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 md:mb-8">
        Top Brands for You
      </h2>

      <div className="flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide pb-4">
        {brands.map((brand, index) => (
          <div
            key={index}
            onClick={() => setSelectedBrand(brand.name)}
            className="flex flex-col items-center cursor-pointer group"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden group-hover:scale-105 transition duration-300">
              <img
                src={brand.image}
                alt={brand.name}
                loading="lazy"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
              />
            </div>

            <p className="mt-3 text-sm sm:text-base md:text-lg font-medium text-gray-700 text-center">
              {brand.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;