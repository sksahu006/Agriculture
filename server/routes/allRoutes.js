const express = require("express");
const router = express.Router();
const authenticateJWT = require("../middleware/authJwt");

const userController = require("../controllers/UserController");
const productController = require("../controllers/ProductController");
const orderController = require("../controllers/OrderController");
const cartController = require("../controllers/CartController");

// User Routes
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/user/:id", authenticateJWT, userController.getUserById);

// Product Routes
router.post("/products", authenticateJWT, productController.createProduct);
router.put("/products/:id", authenticateJWT, productController.updateProduct); 
router.get("/products", authenticateJWT, productController.getAllProducts);

// Order Routes
router.post("/orders", authenticateJWT, orderController.createOrder); 
router.get("/orders/:user_id", authenticateJWT, orderController.getOrdersByUser);

// Cart Routes
router.post("/cart", authenticateJWT, cartController.addToCart);

module.exports = router;
