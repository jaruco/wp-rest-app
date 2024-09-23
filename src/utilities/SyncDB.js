const sequelize = require('../config/Database');
const Articulo = require('../models/Articulo');

sequelize.sync({ force: false })
  .then(() => {
    console.log('Base de datos sincronizada.');
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });
