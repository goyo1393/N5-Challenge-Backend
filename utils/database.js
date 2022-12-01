// Configuración de Conexión a la Base de Datos usando ORM Sequelize

const Sequelize = require('sequelize');

const sequelize = new Sequelize(`${process.env.DB_DIALECT}://${process.env.DB_USER}:${process.env.DB_PW}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_SCHEMA}`);

module.exports = sequelize;