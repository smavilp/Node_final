const encryptPassword = require("../utils/encryptPassword");
const {
  createNewUser,
  findUserbyEmail,
  actualizeUser
} = require("../repositories/users.repository");
const sendWelcomeMail = require("../utils/sendWelcomeMail");
const comparePassword = require("../utils/comparePassword");
const signToken = require("../utils/signToken");
require("dotenv").config();

class UsersServices {
  static async createUser(newUserData) {
    try {
      const { username, email, password, avatar } = newUserData;
      const hashed = await encryptPassword(password);
      const userData = {
        username,
        email,
        password: hashed,
        avatar
      };
      const user = await createNewUser(userData);

      const mailData = {
        username,
        email
      };

      sendWelcomeMail(mailData);

      return user;
    } catch (error) {
      throw error;
    }
  }

  static async login(userData) {
    try {
      const { email, password } = userData;
      const user = await findUserbyEmail(email);

      if (!user) {
        throw {
          status: 400,
          name: "Invalid email",
          message: "Email not exist"
        };
      }

      const isValidPassword = await comparePassword(password, user.password);

      if (!isValidPassword) {
        throw {
          status: 400,
          error: "Invalid password",
          message: "Incorrect password"
        };
      }

      const { id, firstName, lastName, roleId, statusId } = user;

      const userInfo = { id, firstName, lastName, roleId, statusId };

      const token = signToken(userInfo, process.env.JWT_SECRET_LOGIN, {
        algorithm: "HS512",
        expiresIn: "24h"
      });

      userInfo.token = token;
      console.log(userInfo);
      return userInfo;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, newData) {
    try {
      await actualizeUser(id, newData);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UsersServices;
