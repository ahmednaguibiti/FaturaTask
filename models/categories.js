const db = require('../database/connection');
const { DataTypes } = require('sequelize');

const Category = db.define('categories', {
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        parent_id: {
            type: DataTypes.INTEGER
        }
    }, 
    {
        timestamps: false
    }
);

Category.belongsTo(Category, {foreignKey: 'parent_id', as: 'parent_category'});

module.exports = Category;