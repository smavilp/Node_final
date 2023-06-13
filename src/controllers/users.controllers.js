require("dotenv").config();
const UsersServices = require("../services/users.services");

const registerUser = async (req, res) => {
  try {
    console.log(req.body);
    const newUserData = req.body;
    console.log(newUserData);
    await UsersServices.createUser(newUserData);
    res.status(200).send("User registered");
  } catch (error) {
    res.status(400).json(error);
  }
};

const login = async (req, res) => {
  try {
    const userData = req.body;
    console.log(userData);
    const user = await UsersServices.login(userData);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    await UsersServices.updateUser(id, newData);
    res.status(200).send("User updated");
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  registerUser,
  login,
  updateUser
};
