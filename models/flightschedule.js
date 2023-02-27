'use strict';
const {
  Model
} = require('sequelize');

const availableAirports = [
  'MIA',
  'JFK',
  'LAX'
];

module.exports = (sequelize, DataTypes) => {
  class FlightSchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FlightSchedule.init({
    originAirport: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [availableAirports],
          msg: 'Invalide origin airport'
        }
      }
    },
    destinationAirport: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [availableAirports],
          msg: 'Invalid destination airport'
        }
      }
    },
    departureTime: {
      type: DataTypes.DATE,
      validate: {
        isDate: {
          args: true,
          msg: 'Invalid depurture time.'
        }

      }
    }
  }, {
    sequelize,
    modelName: 'FlightSchedule',
    validate: {
      validDestination() {
        const hasAirportValue = this.originAirport !== null && this.destinationAirport !== null;
        const isInvalidDestination = this.originAirport === this.destinationAirport;
        if (hasAirportValue && isInvalidDestination) {
          throw new Error("The destination airport cant be same as origin airport !");
        }
      }
    }
  });
  return FlightSchedule;
};