const ProductInCartServices = require("../services/productInCart.services.js");

const addProductInCart = async (req, res) => {
  try {
    const { productId, price } = req.body;
    const { cartId } = req.params;
    await ProductInCartServices.addProductInCart({
      productId,
      price,
      cartId
    });
    res.status(201).send("Product added");
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  addProductInCart
};
