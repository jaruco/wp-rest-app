const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "db_name",
  "user",
  "password",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;
