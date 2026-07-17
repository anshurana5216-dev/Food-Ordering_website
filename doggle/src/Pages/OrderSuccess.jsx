import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/track-order");
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-green-600">
        🎉 Order Placed Successfully!
      </h1>

      <p className="mt-4 text-gray-600">
        Redirecting to order tracking...
      </p>
    </div>
  );
};

export default OrderSuccess;