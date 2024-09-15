const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  user_type: { type: String, enum: ["farmer", "retailer", "end_user"], required: true }, // farmer, retailer, end_user
  profile_pic: String,
  location: String,
  farming_practices: String, // relevant only for farmers
  contact_info: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
