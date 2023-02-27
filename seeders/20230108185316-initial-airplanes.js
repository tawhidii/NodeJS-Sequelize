'use strict';

const {QueryInterface} = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes',[
        {
          planeModel: 'Airbus A220-100',
          email:'barii.py@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
        planeModel: 'Airbus A220-200',
        email:'barii.py@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        planeModel: 'Airbus A220-300',
        email:'barii.py@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        planeModel: 'Airbus A220-400',
        email:'barii.py@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
            planeModel: 'Airbus A220-500',
            email:'barii.py@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date()
        }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
