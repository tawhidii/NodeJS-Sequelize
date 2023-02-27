'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BoardingTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.Customer = this.belongsTo(models['Customer']);
      this.FlightSchedule = this.belongsTo(models['FlightSchedule']);
    }
  }
  BoardingTicket.init({
    seat: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Please enter in a valid seating arrangement !"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'BoardingTicket',
  });
  return BoardingTicket;
};