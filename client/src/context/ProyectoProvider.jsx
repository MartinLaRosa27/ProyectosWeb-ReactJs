import React, { createContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const proyectoContext = createContext();

export const ProyectoProvider = (props) => {
  // ------------------------------------------------------------------- //
  const [proyectos, setProyectos] = useState(null);

  // ------------------------------------------------------------------- //
  const [proyecto, setProyecto] = useState(null);

  // ------------------------------------------------------------------- //
  const postProyecto = async (e, proyecto) => {
    e.preventDefault();
    await axios
      .post(`http://${process.env.REACT_APP_BACKEND_URL}/post-proyecto`, {
        usuarioId: proyecto.usuarioId,
        descProyecto: proyecto.descProyecto,
        nombreProyecto: proyecto.nombreProyecto,
      })
      .then((res) => {
        getProyectoConParametros(proyecto.usuarioId);
        Swal.fire(res.data.mensaje, "", "success");
      })
      .catch((e) => {
        Swal.fire(e.response.data.mensaje, "", "error");
      });
  };

  // ------------------------------------------------------------------- //
  const getProyectoConParametros = async (id) => {
    await axios
      .get(`http://${process.env.REACT_APP_BACKEND_URL}/get-proyectos/${id}`)
      .then((res) => {
        setProyectos(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // ------------------------------------------------------------------- //
  const getProyectoPorId = async (id) => {
    await axios
      .get(
        `http://${process.env.REACT_APP_BACKEND_URL}/get-proyecto-por-id/${id}`
      )
      .then((res) => {
        setProyecto(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // ------------------------------------------------------------------- //
  const deleteProyecto = async (id) => {
    await axios
      .delete(
        `http://${process.env.REACT_APP_BACKEND_URL}/delete-proyecto/${id}`
      )
      .then((res) => {
        Swal.fire(res.data.mensaje, "", "success");
      })
      .catch((e) => {
        Swal.fire(e.response.data.mensaje, "", "error");
      });
  };

  // ------------------------------------------------------------------- //
  const updateProyecto = async (e, proyecto, id) => {
    e.preventDefault();
    await axios
      .patch(
        `http://${process.env.REACT_APP_BACKEND_URL}/update-proyecto/${id}`,
        {
          descProyecto: proyecto.descProyecto,
          nombreProyecto: proyecto.nombreProyecto,
        }
      )
      .then((res) => {
        getProyectoPorId(id);
        Swal.fire(res.data.mensaje, "", "success");
      })
      .catch((e) => {
        Swal.fire(e.response.data.mensaje, "", "error");
      });
  };

  // ------------------------------------------------------------------- //
  return (
    <proyectoContext.Provider
      value={{
        proyectos,
        proyecto,
        postProyecto,
        getProyectoConParametros,
        getProyectoPorId,
        deleteProyecto,
        updateProyecto,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default proyectoContext;
