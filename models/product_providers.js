const db = require('../database/connection');
const { DataTypes } = require('sequelize');

const ProductProvider = db.define('products_providers', {
        productsId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        providersId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        available: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, 
    {
        timestamps: false
    }
);


module.exports = ProductProvider; 