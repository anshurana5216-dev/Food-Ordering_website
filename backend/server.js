const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./confi/db");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Routes
const foodRoutes = require("./routes/foodRoutes");
const signupRoutes = require("./routes/SignupRoute");

app.use("/api/auth", signupRoutes);
app.use("/api/foods", foodRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});