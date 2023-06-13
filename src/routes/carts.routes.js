const { Router } = require("express");
const getProductsInUserCart = require("../controllers/carts.controllers");

const router = Router();

router.get("/cart/:id", getProductsInUserCart);

module.exports = router;
