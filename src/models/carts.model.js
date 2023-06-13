const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Carts = db.define("carts", {
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
    defaultValue: 0,
    field: "total_price"
  }
});

module.exports = Carts;
