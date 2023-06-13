const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Products = db.define("products", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    validate: {
      isInt: true
    }
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      len: [1, 50]
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
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.REAL,
    allowNull: false
  },
  avaliableQty: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true
    },
    field: "avaliable_qty"
  },
  productImage: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: "product_image"
  },
  status: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      len: [1, 50]
    }
  }
});

module.exports = Products;
