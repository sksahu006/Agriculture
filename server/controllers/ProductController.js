const Product = require("../models/Product");

// Create new product (Farmer adds crop)
exports.createProduct = async (req, res) => {
  try {
    const { farmer_id, name, description, images, price, quantity, organic_certified } = req.body;
    const product = new Product({ farmer_id, name, description, images, price, quantity, organic_certified });
    await product.save();
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update product (Farmer updates stock)
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Product updated successfully", product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
