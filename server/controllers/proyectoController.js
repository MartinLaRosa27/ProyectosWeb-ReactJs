const shortId = require("shortid");
const Proyecto = require("../models/Proyecto");

// --------------------------------------------------------------------------- //
exports.postProyecto = async (req, res) => {
  const { usuarioId, nombreProyecto, descProyecto } = req.body;
  const n = await Proyecto.count({
    where: {
      usuarioId,
      nombreProyecto,
    },
  });
  if (n > 0) {
    res
      .status(400)
      .json({ mensaje: "Ya existe un proyecto creado con el mismo nombre" });
  } else {
    try {
      await Proyecto.create({
        _id: shortId.generate(),
        usuarioId,
        nombreProyecto,
        descProyecto,
      });
      res.status(200).json({
        mensaje: "Proyecto creado con exito",
      });
    } catch (e) {
      res.status(400).json({ mensaje: e.errors[0].message });
    }
  }
};

// --------------------------------------------------------------------------- //
exports.getProyectos = async (req, res) => {
  const proyectos = await Proyecto.findAll({
    where: {
      usuarioId: req.params.id,
    },
    order: [["createdAt", "ASC"]],
  });
  res.send(proyectos);
};

// --------------------------------------------------------------------------- //
exports.getProyectoPorId = async (req, res) => {
  const proyectos = await Proyecto.findOne({
    where: {
      _id: req.params.id,
    },
  });
  res.send(proyectos);
};

// --------------------------------------------------------------------------- //
exports.deleteProyecto = async (req, res) => {
  await Proyecto.destroy({
    where: {
      _id: req.params.id,
    },
  });
  const n = await Proyecto.count({
    where: {
      _id: req.params.id,
    },
  });
  if (n != 0) {
    res.status(500).json({ mensaje: "No se pudo eliminar el proyecto" });
  } else {
    res.status(200).json({ mensaje: "Proyecto eliminado" });
  }
};

// --------------------------------------------------------------------------- //
exports.updateProyecto = async (req, res) => {
  const { nombreProyecto, descProyecto } = req.body;
  try {
    await Proyecto.update(
      {
        nombreProyecto,
        descProyecto,
      },
      {
        where: {
          _id: req.params.id,
        },
      }
    );
    res.status(200).json({
      mensaje: "Proyecto modificado con exito",
    });
  } catch (e) {
    res.status(400).json({ mensaje: e.errors[0].message });
  }
};
