import React, { createContext } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Swal from "sweetalert2";
const usuarioContext = createContext();

export const UsuarioProvider = (props) => {
  // ------------------------------------------------------------------- //
  let usuario = null;
  sessionStorage.getItem("token")
    ? (usuario = jwt_decode(sessionStorage.getItem("token")))
    : (usuario = null);

  // ------------------------------------------------------------------- //
  const postUsuario = async (e, usuario) => {
    e.preventDefault();
    if (usuario.password !== usuario.passwordAux) {
      Swal.fire("LAS CONTRASEÑAS INGRESADAS NO COINCIDEN", "", "error");
    } else {
      await axios
        .post(`http://${process.env.REACT_APP_BACKEND_URL}/post-usuario`, {
          email: usuario.email.toLowerCase(),
          password: usuario.password,
        })
        .then((res) => {
          Swal.fire(res.data.mensaje, "", "success");
          window.location.reload();
        })
        .catch((e) => {
          Swal.fire(e.response.data.mensaje, "", "error");
        });
    }
  };

  // ------------------------------------------------------------------- //
  const cerrarSesion = () => {
    sessionStorage.removeItem("token");
    window.location.reload();
  };

  // ------------------------------------------------------------------- //
  const verificarUsuario = async (e, usuario) => {
    e.preventDefault();
    await axios
      .post(`http://${process.env.REACT_APP_BACKEND_URL}/verificar-usuario`, {
        email: usuario.email.toLowerCase(),
        password: usuario.password,
      })
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        Swal.fire("Login Correcto", "", "success");
        window.location.reload();
      })
      .catch((e) => {
        Swal.fire(e.response.data.mensaje, "", "error");
      });
  };

  // ------------------------------------------------------------------- //
  return (
    <usuarioContext.Provider
      value={{ postUsuario, verificarUsuario, cerrarSesion, usuario }}
    >
      {props.children}
    </usuarioContext.Provider>
  );
};

export default usuarioContext;
