import React from "react";
import { useTarea } from "../../hook/useTarea";
import { FormAgregarTareaProyecto } from "./helpers/FormAgregarTareaProyecto";

export const ListaTareasProyecto = (props) => {
  // ------------------------------------------------------------------- //
  const { deleteTarea, patchTarea } = useTarea();

  // ------------------------------------------------------------------- //
  return (
    <div id="lista_tareas_proyecto" className="container text-center mt-5">
      {/* Form agregar tarea*/}
      <div className="mt-4 mb-5">
        <h5>Agregar nueva tarea al proyecto</h5>
        <FormAgregarTareaProyecto proyecto={props.proyecto} />
      </div>

      <h5>Tareas del Proyecto</h5>

      {/* No hay tareas creadas */}
      {props.tareas.length === 0 && (
        <div className="alert alert-warning text-center mt-3" role="alert">
          No hay tareas creadas
        </div>
      )}

      {/* Lista de tareas */}
      <ul className="list-group mt-3 mb-5">
        {props.tareas.length > 0 &&
          props.tareas.map((tarea) => {
            return (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={tarea._id}
              >
                {tarea.descTarea}
                <div className="d-flex flex-column">
                  <button
                    type="button"
                    className={`btn rounded-pill badge text-uppercase ${
                      tarea.completado ? "btn-success" : "btn-danger"
                    }`}
                    onClick={() => {
                      patchTarea(tarea._id, props.proyecto._id);
                    }}
                  >
                    {tarea.completado ? <>Terminado</> : <>Incompleto</>}
                  </button>
                  <button
                    type="button"
                    className="btn rounded-pill badge text-uppercase btn-dark mt-2"
                    onClick={() => deleteTarea(tarea._id, props.proyecto._id)}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
