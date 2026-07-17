import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import shoppingCart from "../../assets/shopping-cart.png";
import { CartContext } from "../../Context/Context";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { cart } = useContext(CartContext);

  const [address, setAddress] = useState(
    localStorage.getItem("deliveryAddress") || ""
  );

  const [addressSaved, setAddressSaved] = useState(
    localStorage.getItem("addressSaved") === "true"
  );

  // Fix for ReferenceError
  const hasAddress = addressSaved && address.trim() !== "";

  useEffect(() => {
    const updateAddress = () => {
      setAddress(localStorage.getItem("deliveryAddress") || "");
      setAddressSaved(
        localStorage.getItem("addressSaved") === "true"
      );
    };

    window.addEventListener("storage", updateAddress);

    return () => {
      window.removeEventListener("storage", updateAddress);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-xl py-2"
            : "bg-white shadow-md py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex justify-between items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Food Logo"
              className="h-16 md:h-20 w-auto object-contain cursor-pointer hover:scale-110 transition duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 text-gray-700 font-semibold">
            <li>
              <Link
                to="/"
                className="hover:text-orange-500 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-orange-500 transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-5">
            <img
              src={search}
              alt="Search"
              onClick={() => setShowSearch(!showSearch)}
              className="w-7 h-7 cursor-pointer hover:scale-110 transition"
            />

            <Link to="/cart" className="relative">
              <img
                src={shoppingCart}
                alt="Cart"
                className="w-7 h-7 cursor-pointer hover:scale-110 transition"
              />

              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>

            <Link
              to="/location"
              className="px-5 py-2.5 border border-gray-300 rounded-full font-medium hover:bg-gray-100 transition"
            >
              📍{" "}
              {hasAddress
                ? `${address.slice(0, 15)}...`
                : "Location"}
            </Link>

            <Link
              to="/signup"
              className="px-6 py-2.5 bg-orange-500 text-white rounded-full font-semibold shadow-md hover:bg-orange-600 transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-lg px-6 py-6">
            <div className="flex flex-col gap-5 font-semibold">
              <Link to="/">Home</Link>

              <Link to="/contact">Contact Us</Link>

              <Link
                to="/location"
                className="px-5 py-2.5 border border-gray-300 rounded-full font-medium hover:bg-gray-100 transition"
              >
                📍{" "}
                {hasAddress
                  ? `${address.slice(0, 15)}...`
                  : "Location"}
              </Link>

              <Link
                to="/signup"
                className="bg-orange-500 text-white rounded-full py-2 text-center"
              >
                Sign Up
              </Link>
            </div>

            <div className="flex gap-6 mt-6">
              <img
                src={search}
                alt="Search"
                onClick={() => setShowSearch(!showSearch)}
                className="w-7 h-7 cursor-pointer"
              />

              <Link to="/cart" className="relative">
                <img
                  src={shoppingCart}
                  alt="Cart"
                  className="w-7 h-7"
                />

                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </nav>

      {showSearch && (
        <div className="fixed top-24 left-0 w-full bg-white shadow-lg z-60 px-6 py-4">
          <div className="max-w-4xl mx-auto flex gap-3">
            <input
              type="text"
              placeholder="Search for food, restaurants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
            />

            <button
              onClick={() => setShowSearch(false)}
              className="px-4 py-3 bg-orange-500 text-white rounded-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div className="h-28"></div>
    </>
  );
}

export default Navbar;