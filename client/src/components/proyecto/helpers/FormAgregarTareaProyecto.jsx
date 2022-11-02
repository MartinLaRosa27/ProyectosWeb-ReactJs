import React, { useState } from "react";
import { useTarea } from "../../../hook/useTarea";

export const FormAgregarTareaProyecto = (props) => {
  // ------------------------------------------------------------------- //
  const [tarea, setTarea] = useState("");

  // ------------------------------------------------------------------- //
  const { postTarea } = useTarea();

  // ------------------------------------------------------------------- //
  return (
    <form onSubmit={(e) => postTarea(e, props.proyecto._id, tarea)}>
      <div className="form-floating">
        <input
          type="text"
          className="form-control mt-3"
          minLength="5"
          maxLength="90"
          required
          onChange={(e) => {
            setTarea(e.target.value);
          }}
        ></input>
        <label>Descripción Tarea</label>
      </div>
      <button
        className="w-100 btn btn-lg btn-primary mt-3 text-uppercase border-0 btn_agregar"
        type="submit"
      >
        Agregar tarea
      </button>
    </form>
  );
};
