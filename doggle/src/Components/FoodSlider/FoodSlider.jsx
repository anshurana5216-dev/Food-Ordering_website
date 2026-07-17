import React from "react";

const FoodSlider = ({ setSelectedCategory }) => {
  const foods = [


//     {
//   name: "All",
//   image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500"
// }
    {
      name: "Burger",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
    },
    {
      name: "Pizza",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    },
    {
      name: "Biryani",
      image:
        "https://images.unsplash.com/photo-1701579231349-d7459c40919d?w=500",
    },
    {
      name: "Paneer",
      image:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500",
    },
    {
      name: "Chicken",
      image:
        "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500",
    },
    {
      name: "North Indian",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500",
    },
    {
      name: "Thali",
      image:
        "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?w=500",
    },
    {
      name: "Cold Coffee",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500",
    },
    {
      name: "Chocolate Cake",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
    },
    {
      name: "Sweets",
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500",
    },
  ];

  return (
    <div className="w-[95%] md:w-[90%] mx-auto py-8 md:py-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 md:mb-8">
        Inspiration for your first order
      </h2>

      <div className="flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide pb-4">
        {foods.map((food, index) => (
          <div
            key={index}
            onClick={() => setSelectedCategory(food.name)}
            className="flex flex-col items-center cursor-pointer group"
          >
            <img
              src={food.image}
              alt={food.name}
              loading="lazy"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full object-cover shadow-lg group-hover:scale-105 transition duration-300"
            />

            <p className="mt-3 text-sm sm:text-base md:text-lg font-medium text-gray-700 text-center">
              {food.name}
            </p>
          </div>
        ))}
      </div>


      
    </div>
  );
};

export default FoodSlider;