'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     */
     await queryInterface.createTable('products_providers', { 
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true
       } ,
       productsId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      providersId: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      price: {
          type: Sequelize.DOUBLE,
          allowNull: false
      },
    available: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
  }).then(()=> queryInterface.addConstraint('products_providers',{
    type: 'foreign key',
    fields: ['productsId'],
    references : {
      table : 'products',
      field: 'id'
    },
    onDelete : 'CASCADE'
  })).then(()=> {
    queryInterface.addConstraint('products_providers', {
      type: 'foreign key',
      fields: ['providersId'],
      references: {
        table: 'providers',
        field: 'id'
      },
      OnDelete: 'CASCADE'
    })
  })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
     await queryInterface.dropTable('product_providers');
  }
};
