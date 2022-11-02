import React from "react";

export const DetalleProyecto = (props) => {
  return (
    <div id="detalle_proyecto" className="container mt-5 text-center">
      <h3 className="text-center">{props.proyecto.nombreProyecto}</h3>
      <p className="fst-italic mb-4">{props.proyecto.descProyecto}</p>
    </div>
  );
};
