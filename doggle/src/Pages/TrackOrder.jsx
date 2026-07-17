import React from "react";

const TrackOrder = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 mt-10">
      <h1 className="text-3xl font-bold mb-6">
         Track Your Order
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-6">

        <h2 className="text-xl font-semibold mb-4">
          Delivery Partner
        </h2>

        <div className="flex items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Delivery Partner"
            className="w-20 h-20 rounded-full"
          />

          <div>
            <h3 className="font-bold text-lg">Rahul Sharma</h3>
            <p>📞 +91 9876543210</p>
            <p>⭐ 4.8 Rating</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold mb-2">
            Order Status
          </h3>

          <ul className="space-y-3">
            <li>✅ Order Confirmed</li>
            <li>👨‍🍳 Food Preparing</li>
            <li>🚴 Out for Delivery</li>
            <li>🏠 Delivered</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default TrackOrder;