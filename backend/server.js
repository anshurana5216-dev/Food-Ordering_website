require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./confi/db");

const app = express();

// CORS
app.use(
  cors({
    origin: [
      "https://food-ordering-website-vh1d-2iydggxnk-tanshu366-4674s-projects.vercel.app",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);
// Middleware
app.use(express.json());

// Connect Database
connectDB();

// Test Route
app.get("/", (req, res) => {
  res.send("Food Ordering API Running");
});

// Food Routes
const foodRoutes = require("./routes/foodRoutes");
app.use("/api/foods", foodRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});