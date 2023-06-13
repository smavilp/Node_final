const e = require("express");
const {
  cartByUserId,
  updateCart,
  createOrder,
  getProducts,
  addProductsInOrder,
  updateTotalInOrder,
  deletedPurchasedProductsInCart,
  getOrders,
  getUserEmail
} = require("../repositories/orders.repository");

const sendOrderMail = require("../utils/sendOrderMail");

class OrdersServices {
  static async purchaseProducts(id) {
    try {
      //create order and get its id
      const orderId = await createOrder(id);

      //Find the cartId for the user by userId.
      const cartId = await cartByUserId(id);

      //Get de products cart.
      const products = await getProducts(cartId);

      //put the products from the cart into an array and get the order total
      const arrayProducts = [];
      let totalOrder = 0;
      products.map((product) => {
        totalOrder += product.quantity * product.price;
        arrayProducts.push({
          orderId,
          productId: product.productId,
          quantity: product.quantity,
          price: product.price
        });
      });

      //add products in order

      await addProductsInOrder(arrayProducts);

      //update the total in order

      await updateTotalInOrder(totalOrder, orderId);

      //update products cart to purchased

      await updateCart(cartId);

      //products should be removed because the indications said that there was a one-to-one relationship between Users and Carts, so there cannot be duplicate keys (userId, cartId). In other words, an error arises when I want to have for the same user the same product both with status "purchased" and "not purchased".

      await deletedPurchasedProductsInCart(cartId);

      const email = await getUserEmail(id);
      console.log(email);

      sendOrderMail(email);
    } catch (error) {
      throw error;
    }
  }

  static async getUserOrders(id) {
    try {
      const orders = await getOrders(id);
      return orders;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrdersServices;
