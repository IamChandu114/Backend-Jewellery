const express = require("express");
const router = express.Router();
const inventory = require("../data/inventory");

// GET inventory for a product
router.get("/:productId", (req, res) => {
  const product = inventory[req.params.productId];

  if (!product) {
    return res.status(404).json({ error: "Inventory not found" });
  }

  res.json(product);
});

// POST check delivery
router.post("/check-delivery", (req, res) => {
  const { productId, pincode } = req.body;

  const product = inventory[productId];
  if (!product) return res.status(404).json({ error: "Product not found" });

  const canDeliver = product.deliverablePincodes.includes(pincode);
  res.json({ canDeliver });
});

module.exports = router;
