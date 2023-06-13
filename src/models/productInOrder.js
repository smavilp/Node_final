const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const ProductInOrder = db.define("product_in_order", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    validate: {
      isInt: true
    }
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true
    },
    field: "order_id"
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true
    },
    field: "product_id"
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true
    }
  },
  price: {
    type: DataTypes.REAL(),
    allowNull: false
  }
});

module.exports = ProductInOrder;
