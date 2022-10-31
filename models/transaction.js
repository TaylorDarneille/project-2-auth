'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.transaction.belongsTo(models.user)
      models.transaction.belongsTo(models.card)


    }
  }
  transaction.init({
    senderCardId: DataTypes.BIGINT,
    recieverCardId: DataTypes.BIGINT,
    amount: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};