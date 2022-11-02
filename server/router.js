const express = require("express");
const router = express.Router();
const usuarioController = require("./controllers/usuarioController");
const proyectoController = require("./controllers/proyectoController");
const tareaController = require("./controllers/tareaController");

module.exports = () => {
  // Usuario:
  router.post("/post-usuario", usuarioController.postUsuario);
  router.post("/verificar-usuario", usuarioController.verificarUsuario);

  // Proyecto:
  router.post("/post-proyecto", proyectoController.postProyecto);
  router.get("/get-proyectos/:id", proyectoController.getProyectos);
  router.get("/get-proyecto-por-id/:id", proyectoController.getProyectoPorId);
  router.delete("/delete-proyecto/:id", proyectoController.deleteProyecto);
  router.patch("/update-proyecto/:id", proyectoController.updateProyecto);

  // Tareas:
  router.post("/post-tarea", tareaController.postTarea);
  router.get("/get-tareas/:id", tareaController.getTareas);
  router.delete("/delete-tarea/:id", tareaController.deleteTarea);
  router.patch("/patch-tarea/:id", tareaController.patchTarea);

  return router;
};
