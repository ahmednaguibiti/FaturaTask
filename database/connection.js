const Sequelize = require('sequelize');

const db = new Sequelize('fatura', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true
});


module.exports = db;