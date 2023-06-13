const jwt = require("jsonwebtoken");
require("dotenv").config();

const signToken = (data, secretPassword, algorithm) => {
  const signedToken = jwt.sign(data, secretPassword, algorithm);

  return signedToken;
};

module.exports = signToken;
