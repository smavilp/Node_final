const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const registerValidator = [
  check("username", "error with the username field")
    .exists()
    .withMessage("username field is required")
    .notEmpty()
    .withMessage("username field cannot be empty")
    .isString()
    .withMessage("username field must be a string type")
    .isLength({ min: 1, max: 50 })
    .withMessage(
      "the username must have a minimum of 1 character and a maximum of 50 characters"
    ),
  check("email", "error with the email field")
    .exists()
    .withMessage("email field is required")
    .notEmpty()
    .withMessage("email field cannot be empty")
    .isString()
    .withMessage("email field must be a string type")
    .isEmail()
    .withMessage("enter an email with the correct format")
    .isLength({ min: 1, max: 50 })
    .withMessage(
      "the email must have a minimum of 1 character and a maximum of 50 characters"
    ),
  check("password", "error with the password field")
    .exists()
    .withMessage("password field is required")
    .notEmpty()
    .withMessage("password field cannot be empty"),
  (req, res, next) => {
    validateResult(req, res, next);
  }
];

const loginValidator = [
  check("email", "error with the email field")
    .exists()
    .withMessage("email field is required")
    .notEmpty()
    .withMessage("email field cannot be empty")
    .isString()
    .withMessage("email field must be a string type")
    .isEmail()
    .withMessage("enter an email with the correct format")
    .isLength({ min: 1, max: 50 })
    .withMessage(
      "the email must have a minimum of 1 character and a maximum of 50 characters"
    ),
  check("password", "error with the password field")
    .exists()
    .withMessage("password field is required")
    .notEmpty()
    .withMessage("password field cannot be empty"),
  (req, res, next) => {
    validateResult(req, res, next);
  }
];

const updateUserValidator = [
  check("username", "error with the username field")
    .exists()
    .withMessage("username field is required")
    .notEmpty()
    .withMessage("username field cannot be empty")
    .isString()
    .withMessage("username field must be a string type")
    .isLength({ min: 1, max: 50 })
    .withMessage(
      "the username must have a minimum of 1 character and a maximum of 50 characters"
    ),
  check("avatar", "error with the avatar field")
    .exists()
    .withMessage("avatar field is required")
    .notEmpty()
    .withMessage("avatar field cannot be empty"),
  (req, res, next) => {
    validateResult(req, res, next);
  }
];

module.exports = { registerValidator, loginValidator, updateUserValidator };
