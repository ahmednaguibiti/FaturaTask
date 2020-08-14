'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     */
     await queryInterface.createTable('categories', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        name: {
          type: Sequelize.STRING(45),
          allowNull: false
        },
        parent_id: {
            type: Sequelize.INTEGER,
        }
      }).then(()=> queryInterface.addConstraint('categories',{
        type: 'foreign key',
        fields: ['parent_id'],
        references : {
          table : 'categories',
          field: 'id'
        },
      }))
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.dropTable('categories');
  }
};
