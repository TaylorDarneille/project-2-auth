'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  products.init({
    brandName: DataTypes.STRING,
    productName: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.INTEGER,
    color: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};