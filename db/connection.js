const { Sequelize } = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize({
    url: process.env.JAWSDB_URL,
    dialect: 'mysql'
  })
  : new Sequelize('rype_app_db', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

module.exports = sequelize;