// server.js
const express = require("express");
const cors = require("cors");
const products = require("./data/product");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Fetch all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// ✅ Fetch products by category (like vegetable, fruit, dairy)
app.get("/api/products/:category", (req, res) => {
  const category = req.params.category.toLowerCase();
  const filtered = products.filter(
    (item) => item.category.toLowerCase() === category
  );

  if (filtered.length === 0) {
    return res.status(404).json({ message: "No products found for this category" });
  }

  res.json(filtered);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
