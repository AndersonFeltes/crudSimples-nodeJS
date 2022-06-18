const Sequelize = require ('sequelize');

const database = require('./db');

const Produto = database.define('Produto',
    {
        Id:{
            type : Sequelize.INTEGER, 
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        Nome:{
            type : Sequelize.STRING,
            allowNull : false
        },
        dataCriacao:{
           type : Sequelize.DATE, 
           allowNull : false
        }
    }
)

module.exports = Produto;