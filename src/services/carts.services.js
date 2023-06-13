const {
  cartByUserId,
  getProducts
} = require("../repositories/carts.repository");

class CartsServices {
  static async getProductsInCart(id) {
    try {
      const cart = await cartByUserId(id);
      const products = await getProducts(cart.id);
      return products;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CartsServices;
