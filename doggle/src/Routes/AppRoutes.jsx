import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Location from "../Components/location/Location";
import AddFood from "../Pages/Admin/AddFood";
import Cart from "../Pages/Cart/Cart";
import Payment from "../pages/Payment/Payment";
import OrderSuccess from "../pages/OrderSuccess";
import TrackOrder from "../pages/TrackOrder";


function AppRoutes({ cart, setCart }) {
  return (
    <Routes>
      <Route path="/" element={
          <Home
            cart={cart}
            setCart={setCart}
          />
        }
      />

      <Route
        path="/cart"
        element={<Cart cart={cart} />}
      />

      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/location" element={<Location />} />
      <Route path="/admin/add-food" element={<AddFood />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/order-success" element={<OrderSuccess />} />
      <Route path="/track-order" element={<TrackOrder />} />
  
      
    </Routes>
  );
}
export default AppRoutes;