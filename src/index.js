// src/index.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware para manejo de JSON
app.use(express.json());

// Ruta de ejemplo
app.get('/api', (req, res) => {
  res.json({ message: 'Hello, API REST with Webpack and Node.js!' });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
