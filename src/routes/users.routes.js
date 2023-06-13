const { Router } = require("express");
const {
  registerUser,
  login,
  updateUser
} = require("../controllers/users.controllers");
const {
  registerValidator,
  loginValidator,
  updateUserValidator
} = require("../validators/users.validators");

const router = Router();

router.post("/register", registerValidator, registerUser);
router.post("/login", loginValidator, login);
router.put("/users/:id", updateUserValidator, updateUser);

module.exports = router;
