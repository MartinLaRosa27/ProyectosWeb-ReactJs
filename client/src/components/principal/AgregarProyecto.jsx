import React, { useState } from "react";
import { useProyecto } from "../../hook/useProyecto";

export const AgregarProyecto = (props) => {
  // ------------------------------------------------------------------- //
  const { postProyecto } = useProyecto();

  // ------------------------------------------------------------------- //
  const [proyecto, setProyecto] = useState({
    usuarioId: props.usuario._id,
    descProyecto: "",
    nombreProyecto: "",
  });

  // ------------------------------------------------------------------- //
  return (
    <div id="agregar_proyecto">
      <h3 className="text-center fw-bold">Agregar nuevo proyecto</h3>
      {/* formulario agregar proyecto */}
      <form onSubmit={(e) => postProyecto(e, proyecto)}>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mt-3"
            minLength="3"
            maxLength="90"
            required
            onChange={(e) =>
              setProyecto({
                ...proyecto,
                nombreProyecto: e.target.value,
              })
            }
          ></input>
          <label>Nombre Proyecto</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mt-3"
            minLength="5"
            maxLength="255"
            required
            onChange={(e) =>
              setProyecto({
                ...proyecto,
                descProyecto: e.target.value,
              })
            }
          ></input>
          <label>Descripción Proyecto</label>
        </div>
        <button
          className="w-100 btn btn-lg btn-primary mt-3 text-uppercase border-0"
          type="submit"
        >
          Crear Proyecto
        </button>
      </form>
    </div>
  );
};
