const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createNewProductValidator = [
  check("name", "error with the name field")
    .exists()
    .withMessage("name field is required")
    .notEmpty()
    .withMessage("name field cannot be empty")
    .isString()
    .withMessage("name field must be a string type")
    .isLength({ min: 1, max: 50 })
    .withMessage(
      "the name must have a minimum of 1 character and a maximum of 50 characters"
    ),
  check("userId", "error with the userId field")
    .exists()
    .withMessage("userId field is required")
    .notEmpty()
    .withMessage("userId field cannot be empty")
    .isInt()
    .withMessage("userId field must be a integer type"),
  check("description", "error with the description field")
    .exists()
    .withMessage("description field is required")
    .notEmpty()
    .withMessage("description field cannot be empty"),
  check("price", "error with the price field")
    .exists()
    .withMessage("price field is required")
    .notEmpty()
    .withMessage("price field cannot be empty"),
  check("avaliableQty", "error with the avaliableQty field")
    .exists()
    .withMessage("avaliableQty field is required")
    .notEmpty()
    .withMessage("avaliableQty field cannot be empty")
    .isInt()
    .withMessage("avaliableQty field must be a integer type"),
  check("productImage", "error with the productImage field")
    .exists()
    .withMessage("productImage field is required")
    .notEmpty()
    .withMessage("productImage field cannot be empty"),
  check("status", "error with the status field")
    .exists()
    .withMessage("status field is required")
    .notEmpty()
    .withMessage("status field cannot be empty")
    .isString()
    .withMessage("status field must be a string type")
    .isLength({ min: 1, max: 50 })
    .withMessage(
      "the status must have a minimum of 1 character and a maximum of 50 characters"
    ),
  (req, res, next) => {
    validateResult(req, res, next);
  }
];

const updateProductValidator = [
  check("description", "error with the description field")
    .exists()
    .withMessage("description field is required")
    .notEmpty()
    .withMessage("description field cannot be empty")
    .isString()
    .withMessage("username field must be a string type"),
  (req, res, next) => {
    validateResult(req, res, next);
  }
];

module.exports = {
  createNewProductValidator,
  updateProductValidator
};
