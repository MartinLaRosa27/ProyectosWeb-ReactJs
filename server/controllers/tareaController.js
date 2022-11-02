const shortId = require("shortid");
const Tarea = require("../models/Tarea");

// --------------------------------------------------------------------------- //
exports.postTarea = async (req, res) => {
  const { proyectoId, descTarea } = req.body;
  const n = await Tarea.count({
    where: {
      proyectoId,
      descTarea,
    },
  });
  if (n > 0) {
    res
      .status(400)
      .json({ mensaje: "Ya existe una tarea con la misma descripción" });
  } else {
    try {
      await Tarea.create({
        _id: shortId.generate(),
        proyectoId,
        descTarea,
      });
      res.status(200).json({
        mensaje: "Tarea creada con exito",
      });
    } catch (e) {
      res.status(400).json({ mensaje: e.errors[0].message });
    }
  }
};

// --------------------------------------------------------------------------- //
exports.getTareas = async (req, res) => {
  const tarea = await Tarea.findAll({
    where: {
      proyectoId: req.params.id,
    },
    order: [["createdAt", "ASC"]],
  });
  res.send(tarea);
};

// --------------------------------------------------------------------------- //
exports.deleteTarea = async (req, res) => {
  await Tarea.destroy({
    where: {
      _id: req.params.id,
    },
  });
  const n = await Tarea.count({
    where: {
      _id: req.params.id,
    },
  });
  if (n != 0) {
    res.status(500).json({ mensaje: "No se pudo eliminar la tarea" });
  } else {
    res.status(200).json({ mensaje: "Tarea eliminada" });
  }
};

// --------------------------------------------------------------------------- //
exports.patchTarea = async (req, res) => {
  const tarea = await Tarea.findOne({
    where: {
      _id: req.params.id,
    },
  });
  if (!tarea.completado) {
    try {
      await Tarea.update(
        {
          completado: 1,
        },
        {
          where: {
            _id: req.params.id,
          },
        }
      );
      res.status(200).json({
        mensaje: "Tarea Completada",
      });
    } catch (e) {
      res.status(400).json({ mensaje: e.errors[0].message });
    }
  } else {
    try {
      await Tarea.update(
        {
          completado: 0,
        },
        {
          where: {
            _id: req.params.id,
          },
        }
      );
      res.status(200).json({
        mensaje: "Tarea No Completada",
      });
    } catch (e) {
      res.status(400).json({ mensaje: e.errors[0].message });
    }
  }
};
