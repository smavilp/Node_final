const Carts = require("./carts.model");
const Orders = require("./orders.model");
const ProductInCart = require("./productInCart.model");
const ProductInOrder = require("./productInOrder");
const Products = require("./products.model");
const Users = require("./users.model");

const initModels = () => {
  //One-To-Many relationship

  Users.hasMany(Products, { foreignKey: "userId" });
  Products.belongsTo(Users, { foreignKey: "userId" });

  //One-To-One relationship

  Users.hasOne(Carts, { foreignKey: "userId" });
  Carts.hasOne(Users, { foreignKey: "userId" });

  //One-To-Many relationship

  Users.hasMany(Orders, { foreignKey: "userId" });
  Orders.belongsTo(Users, { foreignKey: "userId" });

  //Super Many-to-Many relationship

  Carts.belongsToMany(Products, { through: ProductInCart });
  Products.belongsToMany(Carts, { through: ProductInCart });
  Carts.hasMany(ProductInCart, { foreignKey: "cartId" });
  ProductInCart.belongsTo(Carts, { foreignKey: "cartId" });
  Products.hasMany(ProductInCart, { foreignKey: "productId" });
  ProductInCart.belongsTo(Products, { foreignKey: "productId" });

  //Super Many-to-Many relationship

  Orders.belongsToMany(Products, { through: ProductInOrder });
  Products.belongsToMany(Orders, { through: ProductInOrder });
  Orders.hasMany(ProductInOrder, { foreignKey: "orderId" });
  ProductInOrder.belongsTo(Orders, { foreignKey: "orderId" });
  Products.hasMany(ProductInOrder, { foreignKey: "productId" });
  ProductInOrder.belongsTo(Products, { foreignKey: "productId" });
};

module.exports = initModels;
