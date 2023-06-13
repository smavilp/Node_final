const ProductInCart = require("../models/productInCart.model");
const { Op } = require("sequelize");

const getOneProduct = async (productId) => {
  const product = ProductInCart.findOne({
    where: {
      productId
    }
  });
  return product;
};

const addProduct = async (data) => {
  try {
    data.quantity = 1;
    await ProductInCart.create(data);
  } catch (error) {
    throw error;
  }
};

const updateQuantity = async (id) => {
  const product = await ProductInCart.increment(
    {
      quantity: 1
    },
    {
      where: {
        productId: id
      }
    }
  );
  return product;
};

const getProductsInCart = async (id) => {
  console.log(id);
  const product = await ProductInCart.findAll({
    where: {
      carId: id
    }
  });
  return product;
};

module.exports = {
  getOneProduct,
  addProduct,
  updateQuantity,
  getProductsInCart
};
