const db = require('../database/connection');
const { DataTypes } = require('sequelize');
const ProductProvider = require('./product_providers');

const Product = db.define('products', {
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        image_uri: {
            type: DataTypes.STRING(255)
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, 
    {
        timestamps: false
    }
);

Product.hasMany(ProductProvider, {foreignKey: 'productsId'});


module.exports = Product;