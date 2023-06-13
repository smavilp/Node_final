const CartsServices = require("../services/carts.services");

const getProductsInUserCart = async (req, res) => {
  try {
    const { id } = req.params;
    const userCart = await CartsServices.getProductsInCart(id);
    res.status(200).json(userCart);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = getProductsInUserCart;
