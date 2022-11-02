import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useProyecto } from "../../hook/useProyecto";

export const ListaProyectos = (props) => {
  // ------------------------------------------------------------------- //
  const { proyectos, getProyectoConParametros } = useProyecto();

  // ------------------------------------------------------------------- //
  useEffect(() => {
    getProyectoConParametros(props.usuario._id);
  }, []);

  // ------------------------------------------------------------------- //
  return (
    <div id="lista_proyectos">
      <h3 className="text-center fw-bold mb-3">Mis Proyectos</h3>

      {/* Spinner cargando proyectos creados*/}
      {proyectos === null && (
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden"></span>
          </div>
          <p className="fst-italic mt-2">Cargando...</p>
        </div>
      )}

      {/* Lista de proyectos creados */}
      <ul className="list-group">
        {proyectos != null &&
          proyectos.length > 0 &&
          proyectos.map((proyecto) => {
            return (
              <li className="list-group-item" key={proyecto._id}>
                <NavLink
                  to={`/proyecto/${proyecto._id}`}
                  className="text-decoration-none"
                >
                  {proyecto.nombreProyecto}
                </NavLink>
              </li>
            );
          })}
      </ul>

      {/* No hay proyectos creados */}
      {proyectos != null && proyectos.length === 0 && (
        <div className="alert alert-warning text-center" role="alert">
          No hay proyectos creados
        </div>
      )}
    </div>
  );
};
