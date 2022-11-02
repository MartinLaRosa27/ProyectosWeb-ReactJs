const Sequelize = require("sequelize");
const dataBase = require("../config/database.js");
const Tarea = require("./Tarea");

const Proyecto = dataBase.define("proyecto", {
  _id: {
    type: Sequelize.STRING(16),
    primaryKey: true,
    allowNull: false,
  },

  nombreProyecto: {
    type: Sequelize.STRING(90),
    allowNull: false,
    validate: {
      len: {
        args: [5, 90],
        msg: "El nombre del proyecto debe tener entre 5 y 90 caracteres",
      },
      notEmpty: {
        args: true,
        msg: "El nombre del proyecto no puede ir vacio",
      },
    },
  },

  descProyecto: {
    type: Sequelize.STRING(255),
    allowNull: false,
    validate: {
      len: {
        args: [5, 255],
        msg: "La descripción del proyecto debe tener entre 5 y 255 caracteres",
      },
      notEmpty: {
        args: true,
        msg: "La descripción del proyecto no puede ir vacia",
      },
    },
  },
});

Proyecto.hasMany(Tarea);

module.exports = Proyecto;
