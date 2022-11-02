import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProyecto } from "../../hook/useProyecto";
import { useTarea } from "../../hook/useTarea";
import { DetalleProyecto } from "./DetalleProyecto";
import { EditarProyecto } from "./EditarProyecto";
import { ListaTareasProyecto } from "./ListaTareasProyecto";
import "./proyecto.css";

export const Proyecto = () => {
  // ------------------------------------------------------------------- //
  const { proyectoId } = useParams();

  // ------------------------------------------------------------------- //
  const { proyecto, getProyectoPorId } = useProyecto();
  const { tareas, getTareas } = useTarea();

  // ------------------------------------------------------------------- //
  useEffect(() => {
    getProyectoPorId(proyectoId);
    getTareas(proyectoId);
  }, []);

  // ------------------------------------------------------------------- //
  return (
    <div
      id="proyecto"
      className="text-uppercase bg-light bg-gradient pt-5 pb-5"
    >
      {/* Spinner mientras se carga el pryecto seleccionado */}
      {(proyecto === null || tareas === null) && (
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden"></span>
          </div>
          <p className="fst-italic mt-2">Cargando...</p>
        </div>
      )}

      {/* Muestra información al cargar el proyecto que se selecciono */}
      {proyecto !== null && tareas !== null && (
        <>
          <DetalleProyecto proyecto={proyecto} />
          <ListaTareasProyecto proyecto={proyecto} tareas={tareas} />
          <EditarProyecto proyecto={proyecto} />
        </>
      )}
    </div>
  );
};
