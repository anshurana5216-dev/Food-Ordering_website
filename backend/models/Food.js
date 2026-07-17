const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  category: [String],
  restaurant: [String],

  rating: {
    type: Number,
    default: 4.5
  }
});

module.exports = mongoose.model("Food", foodSchema);