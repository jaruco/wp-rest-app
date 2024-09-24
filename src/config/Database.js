const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "db_name",
  "root",
  "password",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;
