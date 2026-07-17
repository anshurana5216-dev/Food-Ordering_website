import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import FoodSlider from "../../Components/FoodSlider/FoodSlider";
import TopBrands from "../../Components/TopBrands/Topbrands";
import FoodList from "../../Components/FoodList";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  return (
    <>
      <Header />

      <FoodSlider setSelectedCategory={setSelectedCategory} />

      <TopBrands setSelectedBrand={setSelectedBrand} />

      <FoodList
        selectedCategory={selectedCategory}
        selectedBrand={selectedBrand}
      />
    </>
  );
};

export default Home;