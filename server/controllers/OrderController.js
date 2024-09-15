const Order = require("../models/Order");

// Create an order
exports.createOrder = async (req, res) => {
  try {
    const { user_id, farmer_id, products, total_amount } = req.body;
    const order = new Order({ user_id, farmer_id, products, total_amount });
    await order.save();
    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get orders by user
exports.getOrdersByUser = async (req, res) => {
  try {
    const orders = await Order.find({ user_id: req.params.user_id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
