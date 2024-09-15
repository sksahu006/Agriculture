const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  farmer_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // farmer reference
  name: { type: String, required: true },
  description: String,
  images: [String],
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  organic_certified: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
