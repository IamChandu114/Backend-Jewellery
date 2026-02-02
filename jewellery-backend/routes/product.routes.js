// routes/product.routes.js

const express = require("express");
const router = express.Router();
const products = require("../data/products");

// GET product by ID
router.get("/:id", (req, res) => {
  const productId = req.params.id;

  // Find product
  const product = products.find(p => p.id === productId);

  // If not found
  if (!product) {
    return res.status(404).json({
      error: "Product not found"
    });
  }

  // If found
  res.json(product);
});

module.exports = router;

