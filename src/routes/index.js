const userRoutes = require("./users.routes");
const productsRoutes = require("./products.routes");
const productInCartRoutes = require("./productInCart.routes");
const cartsRoutes = require("./carts.routes");
const ordersRoutes = require("./orders.routes");
const swaggerUI = require("swagger-ui-express");
const swaggerDoc = require("../swagger.json");

const apiRoutes = (app) => {
  app.use(userRoutes);
  app.use(productsRoutes);
  app.use(productInCartRoutes);
  app.use(cartsRoutes);
  app.use(ordersRoutes);
  app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));
};

module.exports = apiRoutes;
