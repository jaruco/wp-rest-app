const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "db_name",
  "user",
  "password",
  {
    host: "host",
    dialect: "mysql",
  }
);

module.exports = sequelize;
