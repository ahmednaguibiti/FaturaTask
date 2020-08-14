const db = require('../database/connection');
const { DataTypes } = require('sequelize');

const ProductProvider = require('./product_providers');

const Provider = db.define('providers', {
        name: {
            type: DataTypes.STRING(45)
        }
    }, 
    {
        timestamps: false
    }
);

Provider.hasMany(ProductProvider, {foreignKey: 'providersId'});


module.exports = Provider;