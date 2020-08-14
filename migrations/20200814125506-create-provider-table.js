'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     */
    await queryInterface.createTable('providers', {
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true
       },
       name: {
        type: Sequelize.STRING(45)
    }

      });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
     await queryInterface.dropTable('providers');
  }
};
