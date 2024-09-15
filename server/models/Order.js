const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // end user who placed the order
  farmer_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // farmer whose product was bought
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }], // list of ordered products
  total_amount: { type: Number, required: true },
  payment_status: { type: String, enum: ["pending", "completed"], default: "pending" },
  delivery_status: { type: String, enum: ["pending", "shipped", "delivered"], default: "pending" },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
