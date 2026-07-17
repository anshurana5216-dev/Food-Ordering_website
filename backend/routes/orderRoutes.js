const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.send("Place Order");
});

router.get("/", (req, res) => {
  res.send("Get Orders");
});

router.get("/:id", (req, res) => {
  res.send("Get Single Order");
});

module.exports = router;