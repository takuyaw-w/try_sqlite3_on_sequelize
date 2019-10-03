'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('User', [{
        name: 'John Doe',
        email: 'john_doe@example.com',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
