const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
    },

    name: String,

    image: String,

    description: String,

    category: String,

    price: Number,

    isVeg: Boolean,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Product",
  productSchema
);