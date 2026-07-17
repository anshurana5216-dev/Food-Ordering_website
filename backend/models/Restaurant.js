const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    logo: String,

    image: String,

    cuisine: [String],

    rating: {
      type: Number,
      default: 4,
    },

    deliveryTime: String,

    address: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Restaurant",
  restaurantSchema
);