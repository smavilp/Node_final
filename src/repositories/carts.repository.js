const Carts = require("../models/carts.model");
const ProductInCart = require("../models/productInCart.model");
const Products = require("../models/products.model");
const { Op } = require("sequelize");

const cartByUserId = async (id) => {
  try {
    const result = await Carts.findOne({
      where: {
        userId: id
      }
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const getProducts = async (id) => {
  try {
    const result = await ProductInCart.findAll({
      where: {
        [Op.and]: [{ cartId: id }, { status: "not purchased" }]
      },
      include: {
        model: Products
      }
    });
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  cartByUserId,
  getProducts
};
