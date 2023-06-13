const {
  createNewProduct,
  getProducts,
  actualizeProduct
} = require("../repositories/products.repository");

class ProductsServices {
  static async createNewProduct(newProductData) {
    try {
      await createNewProduct(newProductData);
    } catch (error) {
      throw error;
    }
  }

  static async getAllProducts() {
    try {
      const Products = await getProducts();
      return Products;
    } catch (error) {
      throw error;
    }
  }

  static async updateProduct(id, description) {
    try {
      await actualizeProduct(id, description);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductsServices;
