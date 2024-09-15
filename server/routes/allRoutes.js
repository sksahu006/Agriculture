const express=require("express");
const userRoutes=require("./UserRoutes");

const router=express.Router();

router.use("/user",userRoutes);

module.exports=router;