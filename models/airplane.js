'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.FlightSchedules = this.hasMany(models.FlightSchedule)
    }
  }
  Airplane.init({

    planeModel: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Plane type should not be empty !"
        }
      }
    },
    totalSeats: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 1,
          msg: "Plane must have one seat"
        }
      }
    },

    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};