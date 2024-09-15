const express = require("express");
const router = express.Router();

const {
  login,
  createUser,
  getAllUsers,
  updateUser,
//   getUserById,
} = require("../controllers/UserController");

router.post("/login", login);
router.post("/create_user", createUser);
router.get("/get-allUsers", getAllUsers);
router.put("/update_user/:id", updateUser);
// router.use("/getUserById/:id", getUserById);

module.exports = router;
