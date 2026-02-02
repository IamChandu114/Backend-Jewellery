const express = require("express");
const router = express.Router();
const calculatePrice = require("../utils/priceCalculator");

// POST /price/calculate
router.post("/calculate", (req, res) => {
  const { metal, diamond } = req.body;

  if (!metal || !diamond) {
    return res.status(400).json({
      error: "Metal and diamond are required"
    });
  }

  const price = calculatePrice({ metal, diamond });
  res.json(price);
});

module.exports = router;

