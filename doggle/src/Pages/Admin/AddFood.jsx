import { useState } from "react";
import axios from "axios";

function AddFood() {
  const [food, setFood] = useState({
    name: "",
    image: "",
    price: "",
    category: "",
    restaurant: "",
  });

  const handleChange = (e) => {
    setFood({
      ...food,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/foods",
        food
      );

      alert("Food Added Successfully!");

      setFood({
        name: "",
        image: "",
        price: "",
        category: "",
        restaurant: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          placeholder="Food Name"
          value={food.name}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          name="image"
          placeholder="Image URL"
          value={food.image}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          name="price"
          placeholder="Price"
          value={food.price}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          name="category"
          placeholder="Category"
          value={food.category}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          name="restaurant"
          placeholder="Restaurant"
          value={food.restaurant}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Food
        </button>
      </form>
    </div>
  );
}

export default AddFood;