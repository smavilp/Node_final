const OrdersServices = require("../services/orders.services");

const purchaseProducts = async (req, res) => {
  try {
    //in the parameters is the user id
    const { id } = req.params;
    await OrdersServices.purchaseProducts(id);
    res.status(200).send("Thank you for your purchase");
  } catch (error) {
    res.status(400).json(error);
  }
};

const getUserOrders = async (req, res) => {
  try {
    //in the parameters is the user id
    const { id } = req.params;
    const orders = await OrdersServices.getUserOrders(id);
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = { purchaseProducts, getUserOrders };
