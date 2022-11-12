'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.event.belongsToMany(models.user, {through: 'booking'})
      // define association here
    }
  }
  event.init({
    event_type: DataTypes.STRING,
    event_description: DataTypes.STRING,
    event_date: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'event',
  });
  return event;
};