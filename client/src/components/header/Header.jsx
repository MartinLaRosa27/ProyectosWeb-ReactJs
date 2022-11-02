import React from "react";
import { NavLink } from "react-router-dom";
import { useUsuario } from "../../hook/useUsuario";
import logo from "../../img/logo.png";
import "./header.css";

export const Header = () => {
  // --------------------------------------------------------------------------- //
  const { cerrarSesion } = useUsuario();

  // --------------------------------------------------------------------------- //
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light text-uppercase"
      id="header"
    >
      <div className="container-fluid container">
        <NavLink className="navbar-brand" to="/home">
          <img src={logo} alt="."></img>
          <span className="fw-bold"> ProyectosWeb</span>
        </NavLink>
        <div>
          <p onClick={() => cerrarSesion()}>Cerrar sesión</p>
        </div>
      </div>
    </nav>
  );
};
