import React from "react";
import { useNavigate } from "react-router-dom";
import { useProyecto } from "../../hook/useProyecto";
import { FormEditarProyecto } from "./helpers/FormEditarProyecto";

export const EditarProyecto = (props) => {
  // ------------------------------------------------------------------- //
  const { deleteProyecto } = useProyecto();

  // ------------------------------------------------------------------- //
  const navigate = useNavigate();

  // ------------------------------------------------------------------- //
  const handleClick = () => {
    deleteProyecto(props.proyecto._id);
    navigate("/home");
  };

  // ------------------------------------------------------------------- //
  return (
    <div id="editar_proyecto" className="container mt-3">
      <div className="d-flex flex-column">
        {/* btn editar proyecto */}
        <button
          className="btn btn-primary text-uppercase btn_editar border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          Editar Proyecto
        </button>

        {/* btn eliminar proyecto */}
        <button
          type="button"
          className="btn btn-danger text-uppercase mt-2"
          onClick={() => handleClick()}
        >
          Eliminar Proyecto
        </button>
      </div>

      {/* form editar proyecto */}
      <div
        className="offcanvas offcanvas-end container"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <h6 className="mt-5 text-center">Editar Proyecto</h6>
        <FormEditarProyecto proyecto={props.proyecto} />
      </div>
    </div>
  );
};
