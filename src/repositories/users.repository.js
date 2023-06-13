const Carts = require("../models/carts.model");
const Users = require("../models/users.model");

const createNewUser = async (newUser) => {
  try {
    const user = await Users.create(newUser);
    const { id } = user;
    await Carts.create({ userId: id });
    return user;
  } catch (error) {
    throw error;
  }
};

const findUserbyEmail = async (email) => {
  try {
    const result = await Users.findOne({
      where: { email }
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const actualizeUser = async (id, newData) => {
  const { username, avatar } = newData;
  try {
    await Users.update(
      { username: username, avatar: avatar },
      { where: { id } }
    );
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createNewUser,
  findUserbyEmail,
  actualizeUser
};
