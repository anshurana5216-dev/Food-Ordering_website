import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";

import { CartContext } from "../Context/Context";


function FoodList({ selectedCategory, selectedBrand }) {
  const [foods, setFoods] = useState([]);


  useEffect(() => {
   axios.get(
 `${import.meta.env.VITE_API_URL}/api/foods`
)
      .then((response) => {
        setFoods(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);




const { cart, setCart } = useContext(CartContext);

const addToCart = (food) => {
  setCart([...cart, food]);
};

const filteredFoods = foods.filter((food) => {
  const categoryMatch = selectedCategory
    ? Array.isArray(food.category)
      ? food.category.some(
          (category) =>
            category.toLowerCase() ===
            selectedCategory.toLowerCase()
        )
      : food.category?.toLowerCase() ===
        selectedCategory.toLowerCase()
    : true;

  const brandMatch = selectedBrand
    ? Array.isArray(food.restaurant)
      ? food.restaurant.some(
          (restaurant) =>
            restaurant.toLowerCase() ===
            selectedBrand.toLowerCase()
        )
      : food.restaurant?.toLowerCase() ===
        selectedBrand.toLowerCase()
    : true;

  return categoryMatch && brandMatch;
});
    

  return (
   <>

<div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-6">

{filteredFoods.map((food) => (

  <div 
    key={food._id}
    className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition bg-white"
  >

    <img
      src={food.image}
      alt={food.name}
      className="w-full h-70 object-cover"
    />


    <div className="p-4">

      <div className="flex justify-between items-center gap-3">


        {/* First Column */}
        <div>

          <h2 className="text-lg font-bold">
            {food.name}
          </h2>


          <p className="text-gray-600 mt-1">
            ₹{food.price}
          </p>


          <div className="flex items-center gap-1 mt-2">

            <FaStar className="text-yellow-400"/>

            <span>
              {food.rating}
            </span>

          </div>


        </div>


        {/* Second Column */}
        <button
          onClick={() => addToCart({
            ...food,
            price:Number(food.price)
          })}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg"
        >
          Add To Cart
        </button>


      </div>


    </div>


  </div>

))}

</div>

</>
  );
}

export default FoodList;