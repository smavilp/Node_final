const { validationResult } = require("express-validator");

const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    res.send({
      status: 400,
      name: "Validation error",
      message: error.errors.map((error) => error.msg)
    });
  }
};

module.exports = validateResult;
