'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     */
    await queryInterface.createTable('products', {
       id:{
         type: Sequelize.INTEGER,
         primaryKey: true
       },
       name: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    image_uri: {
        type: Sequelize.STRING(255)
    },
    category_id: {
        type: Sequelize.INTEGER
    }
      }).then(()=> queryInterface.addConstraint('products',{
        fields: ['category_id'],
        type: 'foreign key',
        references : {
          table : 'categories',
          field: 'id'
        },
        onDelete : 'CASCADE'
      }))
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
      await queryInterface.dropTable('products');
  }
};
