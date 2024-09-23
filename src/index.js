const express = require('express');
const sequelize = require('./config/Database');
const articulosRouter = require('./routes/Articulos');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/articulos', articulosRouter);

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa.');
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
});
