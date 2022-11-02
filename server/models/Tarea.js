const Sequelize = require("sequelize");
const dataBase = require("../config/database.js");

const Tarea = dataBase.define("tarea", {
  _id: {
    type: Sequelize.STRING(16),
    primaryKey: true,
    allowNull: false,
  },

  descTarea: {
    type: Sequelize.STRING(90),
    allowNull: false,
    validate: {
      len: {
        args: [5, 90],
        msg: "La descripción de la tarea debe tener entre 5 y 90 caracteres",
      },
      notEmpty: {
        args: true,
        msg: "La descripción de la tarea no puede ir vacia",
      },
    },
  },

  completado: {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = Tarea;
