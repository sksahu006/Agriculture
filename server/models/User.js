const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
      },
      lastName: {
        type: String,
        // required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      userType: {
        type: String,
        enum: ["SuperAdmin", "Admin", "Staff", "AssociatePartner"],
        required: true,
      },
      isDeleted: {
        type: Boolean,
        default: false,
      },
      gender: {
        type: String,
        required: true,
        enum: ["male", "female", "other"],
      },
      dateOfBirth: {
        type: String,
        // required: true,
      },
      profilePic: {
        type: String,
        // required: true,
      },
})

const User = mongoose.model("User", userSchema);

module.exports = User;
