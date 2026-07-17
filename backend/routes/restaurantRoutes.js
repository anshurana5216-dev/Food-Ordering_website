const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get All Restaurants");
});

router.get("/:id", (req, res) => {
  res.send("Get Single Restaurant");
});

router.post("/", (req, res) => {
  res.send("Create Restaurant");
});

router.put("/:id", (req, res) => {
  res.send("Update Restaurant");
});

router.delete("/:id", (req, res) => {
  res.send("Delete Restaurant");
});

module.exports = router;