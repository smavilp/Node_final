const ProductsServices = require("../services/products.services");

const createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    await ProductsServices.createNewProduct(newProduct);
    res.status(201).send("Product created");
  } catch (error) {
    res.status(400).json(error);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const result = await ProductsServices.getAllProducts();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    await ProductsServices.updateProduct(id, description);
    res.status(200).send("Product updated");
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { createProduct, getAllProducts, updateProduct };
