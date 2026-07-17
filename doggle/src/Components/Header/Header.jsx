import React from "react";

const Header = () => {
  return (
    <header className="relative mx-auto mt-24 w-[95%] md:w-[90%] h-300px sm:h-400px md:h-500px rounded-3xl overflow-hidden">
      
      <img
        src="/banner.png"
        alt="Food Cover"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-16 text-white">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-xl mb-4">
          Order your favourite food here
        </h2>

        {/* <p className="max-w-lg text-sm sm:text-base md:text-lg mb-6">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise.
        </p> */}

        <button className="w-fit px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-full font-medium transition">
          Order Now
        </button>

      </div>
    </header>
  );
};

export default Header;