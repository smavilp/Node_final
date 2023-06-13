const {
  addProduct,
  getOneProduct,
  updateQuantity
} = require("../repositories/productInCart.repository");

class ProductInCartServices {
  static async addProductInCart(dataProduct) {
    try {
      const product = await getOneProduct(dataProduct.productId);
      if (!product) {
        return await addProduct(dataProduct);
      }
      return await updateQuantity(dataProduct.productId);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductInCartServices;
