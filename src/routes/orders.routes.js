const { Router } = require("express");
const {
  purchaseProducts,
  getUserOrders
} = require("../controllers/orders.controllers.js");

const router = Router();

router.get("/purchase-products/:id", purchaseProducts);
router.get("/orders/:id", getUserOrders);

module.exports = router;
