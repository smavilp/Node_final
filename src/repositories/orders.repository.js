const Carts = require("../models/carts.model");
const ProductInCart = require("../models/productInCart.model");
const Orders = require("../models/orders.model");
const Products = require("../models/products.model");
const ProductInOrder = require("../models/productInOrder");
const { Op } = require("sequelize");
const Users = require("../models/users.model");

const cartByUserId = async (id) => {
  try {
    const result = await Carts.findOne({
      where: {
        userId: id
      }
    });
    return result.id;
  } catch (error) {
    throw error;
  }
};

const updateCart = async (cartId) => {
  try {
    const result = await ProductInCart.update(
      { status: "purchased" },
      {
        where: {
          [Op.and]: [{ cartId }, { status: "not purchased" }]
        }
      }
    );
    return result;
  } catch (error) {
    throw error;
  }
};

const deletedPurchasedProductsInCart = async (cartId) => {
  try {
    await ProductInCart.destroy({
      where: {
        [Op.and]: [{ cartId }, { status: "purchased" }]
      }
    });
  } catch (error) {
    throw error;
  }
};

const createOrder = async (id) => {
  try {
    const order = await Orders.create({ userId: id });
    return order.id;
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

const addProductsInOrder = async (products) => {
  try {
    await ProductInOrder.bulkCreate(products);
  } catch (error) {
    throw error;
  }
};

const updateTotalInOrder = async (total, orderId) => {
  try {
    await Orders.update(
      {
        totalPrice: total
      },
      {
        where: {
          id: orderId
        }
      }
    );
  } catch (error) {
    throw error;
  }
};

const getOrders = async (id) => {
  try {
    const orders = Orders.findAll({
      where: { userId: id },
      include: {
        model: ProductInOrder,
        include: Products
      }
    });
    return orders;
  } catch (error) {
    throw error;
  }
};

const getUserEmail = async (id) => {
  try {
    const user = await Users.findByPk(id);
    return user.email;
    console.log(user.email);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  cartByUserId,
  updateCart,
  createOrder,
  getProducts,
  addProductsInOrder,
  updateTotalInOrder,
  deletedPurchasedProductsInCart,
  getOrders,
  getUserEmail
};
