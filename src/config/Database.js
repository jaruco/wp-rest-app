const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "db-inventory",
  "admin",
  "Finibus_8onorum()etMalorum",
  {
    host: "db-inventory.cdiaeo4es7qa.us-east-2.rds.amazonaws.com",
    dialect: "mysql",
  }
);

module.exports = sequelize;
