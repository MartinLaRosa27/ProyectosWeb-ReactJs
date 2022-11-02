import React from "react";
import { AgregarProyecto } from "./AgregarProyecto";
import { ListaProyectos } from "./ListaProyectos";
import "./principal.css";

export const Principal = (props) => {
  // ------------------------------------------------------------------- //
  return (
    <div
      id="principal"
      className="bg-light bg-gradient text-uppercase pt-5 pb-5"
    >
      <div className="container d-flex  justify-content-between ">
        {/* Lista de los proyectos */}
        <div className="w-100 container">
          <ListaProyectos usuario={props.usuario} />
        </div>
        {/* Formulario agregar proyectos */}
        <div className="w-75 container">
          <AgregarProyecto usuario={props.usuario} />
        </div>
      </div>
    </div>
  );
};
