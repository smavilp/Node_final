const { Router } = require("express");
const {
  createProduct,
  getAllProducts,
  updateProduct
} = require("../controllers/products.controllers");
const {
  createNewProductValidator,
  updateProductValidator
} = require("../validators/products.validators");

const router = Router();

router.post("/products", createNewProductValidator, createProduct);
router.get("/products", getAllProducts);
router.put("/products/:id", updateProductValidator, updateProduct);

module.exports = router;
