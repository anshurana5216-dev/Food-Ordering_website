const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get Cart");
});

router.post("/add", (req, res) => {
  res.send("Add To Cart");
});

router.delete("/remove/:id", (req, res) => {
  res.send("Remove From Cart");
});

module.exports = router;