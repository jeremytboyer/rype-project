const { Sequelize } = require("sequelize");

const isProduction = true;
let sequelize;

if (isProduction) {
  new Sequelize(process.env.JAWSDB_URL, {
    dialect: "mysql",
  });
} else {
  new Sequelize("rype_app_db", "root", "", {
    host: "127.0.0.1",
    dialect: "mysql",
  });
}

module.exports = sequelize;
