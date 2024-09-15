const Cart = require("../models/Cart");

// Add product to cart
exports.addToCart = async (req, res) => {
  try {
    const { user_id, product_id, quantity } = req.body;
    const cart = await Cart.findOne({ user_id });

    if (cart) {
      // Update the cart
      const productIndex = cart.products.findIndex(p => p.product_id.toString() === product_id);
      if (productIndex > -1) {
        cart.products[productIndex].quantity += quantity;
      } else {
        cart.products.push({ product_id, quantity });
      }
      cart.total_amount = calculateTotal(cart.products);
      await cart.save();
    } else {
      // Create new cart
      const newCart = new Cart({ user_id, products: [{ product_id, quantity }], total_amount: calculateTotal([{ product_id, quantity }]) });
      await newCart.save();
    }
    res.json({ message: "Product added to cart successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Utility function to calculate total amount
const calculateTotal = (products) => {
  return products.reduce((total, item) => {
    // Assuming we fetch product details and price here for calculation
    return total + item.quantity * 10; // Replace 10 with actual product price
  }, 0);
};
