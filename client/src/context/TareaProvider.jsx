import React, { createContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const tareaContext = createContext();

export const TareaProvider = (props) => {
  // ------------------------------------------------------------------- //
  const [tareas, setTareas] = useState(null);

  // ------------------------------------------------------------------- //
  const getTareas = async (proyectoId) => {
    await axios
      .get(
        `http://${process.env.REACT_APP_BACKEND_URL}/get-tareas/${proyectoId}`
      )
      .then((res) => {
        setTareas(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // ------------------------------------------------------------------- //
  const postTarea = async (e, proyectoId, descTarea) => {
    e.preventDefault();
    await axios
      .post(`http://${process.env.REACT_APP_BACKEND_URL}/post-tarea`, {
        proyectoId,
        descTarea,
      })
      .then((res) => {
        Swal.fire(res.data.mensaje, "", "success");
        getTareas(proyectoId);
      })
      .catch((e) => {
        Swal.fire(e.response.data.mensaje, "", "error");
      });
  };

  // ------------------------------------------------------------------- //
  const deleteTarea = async (_id, proyectoId) => {
    await axios
      .delete(`http://${process.env.REACT_APP_BACKEND_URL}/delete-tarea/${_id}`)
      .then((res) => {
        Swal.fire(res.data.mensaje, "", "success");
        getTareas(proyectoId);
      })
      .catch((e) => {
        Swal.fire(e.response.data.mensaje, "", "error");
      });
  };

  // ------------------------------------------------------------------- //
  const patchTarea = async (_id, proyectoId) => {
    await axios
      .patch(`http://${process.env.REACT_APP_BACKEND_URL}/patch-tarea/${_id}`)
      .then((res) => {
        getTareas(proyectoId);
        Swal.fire(res.data.mensaje, "", "success");
      })
      .catch((e) => {
        Swal.fire(e.response.data.mensaje, "", "error");
      });
  };

  // ------------------------------------------------------------------- //
  return (
    <tareaContext.Provider
      value={{ tareas, postTarea, getTareas, deleteTarea, patchTarea }}
    >
      {props.children}
    </tareaContext.Provider>
  );
};

export default tareaContext;
