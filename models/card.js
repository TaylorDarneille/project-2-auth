'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.card.belongsTo(models.user)
      models.card.hasMany(models.transaction)

    }
  }
  card.init({
    userId: DataTypes.BIGINT,
    cardId: DataTypes.BIGINT,
    iban: DataTypes.STRING,
    cardName: DataTypes.STRING,
    cardNumber: DataTypes.BIGINT,
    expDate: DataTypes.DATE,
    cvc: DataTypes.INTEGER,
    balance: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'card',
  });
  return card;
};