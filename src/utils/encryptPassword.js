const bcrypt = require("bcrypt");

const encryptPassword = async (password) => {
  const hashed = await bcrypt.hash(password, 12);
  return hashed;
};

module.exports = encryptPassword;
