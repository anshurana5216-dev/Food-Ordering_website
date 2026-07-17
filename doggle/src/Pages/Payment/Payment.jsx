import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const navigate = useNavigate();

  const placeOrder = () => {
    navigate("/order-success");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Payment</h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          Select Payment Method
        </h2>

        <div className="space-y-3">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="COD"
              checked={paymentMethod === "COD"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="UPI"
              checked={paymentMethod === "UPI"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            UPI Payment
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="Card"
              checked={paymentMethod === "Card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Debit/Credit Card
          </label>
        </div>

        <button
          onClick={placeOrder}
          className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Payment;