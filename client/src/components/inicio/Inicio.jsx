import React from "react";
import { Registrarse } from "./Registrarse";
import "./inicio.css";
import { Acceder } from "./Acceder";
import logo from "../../img/logo.png";

export const Inicio = () => {
  return (
    <div id="inicio" className="bg-dark text-uppercase text-light text-center">
      <div className="container">
        <div className="pt-5">
          <h1>
            Bienvenido a <span>ProyectosWeb</span>
          </h1>
          <img src={logo} alt="." className="mt-3"></img>
        </div>

        {/* btn_registrarse */}
        <div className="text-dark pt-5 pb-5">
          <button
            type="button"
            className="btn btn-primary border-0 text-uppercase"
            data-bs-toggle="modal"
            data-bs-target="#btn_registrarse"
          >
            Registrarse
          </button>
          <div
            className="modal fade"
            id="btn_registrarse"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <Registrarse />
          </div>
          {/* btn_acceder */}
          <button
            type="button"
            className="btn btn-primary border-0 text-uppercase"
            data-bs-toggle="modal"
            data-bs-target="#btn_acceder"
          >
            Acceder
          </button>
          <div
            className="modal fade"
            id="btn_acceder"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <Acceder />
          </div>
        </div>
      </div>
    </div>
  );
};
