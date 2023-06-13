const { Router } = require("express");
const {
  addProductInCart
} = require("../controllers/productInCart.controllers");

const addProductInCartValidator = require("../validators/productInCart.validator");

const router = Router();

router.post(
  "/addProductInCart/:cartId",
  addProductInCartValidator,
  addProductInCart
);

module.exports = router;
