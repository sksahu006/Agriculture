const express=require('express');
const cors=require('cors');
const database=require("./config/database");
const allRoutes=require("./routes/allRoutes");
const http = require('http');
require("dotenv").config();

const PORT=process.env.PORT || 8000;

database.connect();

const app =express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors());

app.use('/agriculture', allRoutes);

app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"Your server is up and running"
    });
})

server.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
  });
