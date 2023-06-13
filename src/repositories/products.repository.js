const Products = require("../models/products.model");
const Users = require("../models/users.model");
const { Op } = require("sequelize");

const createNewProduct = async (newProduct) => {
  try {
    const product = await Products.create(newProduct);
    return product;
  } catch (error) {
    throw error;
  }
};

const getProducts = async () => {
  try {
    const result = await Products.findAll({
      where: {
        avaliableQty: {
          [Op.gt]: 0
        }
      },
      include: {
        model: Users,
        attributes: { exclude: ["password"] }
      }
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const actualizeProduct = async (id, description) => {
  try {
    await Products.update({ description: description }, { where: { id } });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createNewProduct,
  getProducts,
  actualizeProduct
};
