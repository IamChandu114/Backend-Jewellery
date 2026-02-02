const express = require("express");
const app = express();

app.use(express.json());

// Routes
const productRoutes = require("./routes/product.routes");
const pricingRoutes = require("./routes/pricing.routes");
const inventoryRoutes = require("./routes/inventory.routes");

// Use routes
app.use("/products", productRoutes);
app.use("/price", pricingRoutes);
app.use("/inventory", inventoryRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
