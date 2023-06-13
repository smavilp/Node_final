const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const addProductInCartValidator = [
  check("productId", "error with the productId field")
    .exists()
    .withMessage("productId field is required")
    .notEmpty()
    .withMessage("productId field cannot be empty")
    .isInt()
    .withMessage("productId field must be a integer type"),
  check("price", "error with the price field")
    .exists()
    .withMessage("price field is required")
    .notEmpty()
    .withMessage("price field cannot be empty")
    .isInt()
    .withMessage("price field must be a integer type"),
  (req, res, next) => {
    validateResult(req, res, next);
  }
];

module.exports = addProductInCartValidator;
