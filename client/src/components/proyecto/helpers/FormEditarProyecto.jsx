import React, { useState } from "react";
import { useProyecto } from "../../../hook/useProyecto";

export const FormEditarProyecto = (props) => {
  // ------------------------------------------------------------------- //
  const [proyecto, setProyecto] = useState({
    nombreProyecto: "",
    descProyecto: "",
  });

  // ------------------------------------------------------------------- //
  const { updateProyecto } = useProyecto();

  // ------------------------------------------------------------------- //
  return (
    <form onSubmit={(e) => updateProyecto(e, proyecto, props.proyecto._id)}>
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
        Modificar
      </button>
    </form>
  );
};
