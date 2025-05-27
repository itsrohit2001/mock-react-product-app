const express = require("express");
const { product_data } = require("../data/product_data");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(product_data);
});

module.exports = router;