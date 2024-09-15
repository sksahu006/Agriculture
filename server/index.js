const express = require('express');
const cors = require('cors');
const database = require("./config/database");
const allRoutes = require("./routes/allRoutes");
const http = require('http');
require("dotenv").config();

const PORT = process.env.PORT || 8000;

// Connect to the database
database.connect();

const app = express();
const server = http.createServer(app);

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // or your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));


// Routes
app.use('/agriculture', allRoutes);

// Health check route
app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Your server is up and running"
    });
});

// Start server
server.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
});
