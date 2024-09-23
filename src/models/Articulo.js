const { DataTypes } = require('sequelize');
const sequelize = require('../config/Database');

const Articulo = sequelize.define('Articulo', {
  id: {
    type: DataTypes.STRING(10),
    allowNull: false,
    primaryKey: true,
    validate: {
      len: [1, 10]
    }
  },
  nombre: {
    type: DataTypes.STRING(20),
    allowNull: false,
    validate: {
      len: [1, 20]
    }
  },
  descripcion: {
    type: DataTypes.STRING(200),
    allowNull: true,
    validate: {
      len: [0, 200]
    }
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      isDecimal: true
    }
  },
  modelo: {
    type: DataTypes.STRING(10),
    allowNull: true,
    validate: {
      len: [1, 10]
    }
  }
}, {
  timestamps: true,
  tableName: 'articulos'
});

module.exports = Articulo;
