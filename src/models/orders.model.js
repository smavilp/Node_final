const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Orders = db.define("orders", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    validate: {
      isInt: true
    }
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true
    },
    field: "user_id"
  },
  totalPrice: {
    type: DataTypes.REAL(),
    allowNull: false,
    field: "total_price",
    defaultValue: 0
  }
});

module.exports = Orders;
