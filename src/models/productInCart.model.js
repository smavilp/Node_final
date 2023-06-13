const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const ProductInCart = db.define("product_in_cart", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    validate: {
      isInt: true
    }
  },
  cartId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true
    },
    field: "cart_id"
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
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: "not purchased",
    validate: {
      len: [1, 50]
    }
  }
});

module.exports = ProductInCart;
