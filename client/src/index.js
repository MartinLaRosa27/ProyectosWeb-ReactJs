import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UsuarioProvider } from "./context/UsuarioProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Footer } from "./components/footer/Footer";
import { Inicio } from "./components/inicio/Inicio";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UsuarioProvider>
      {sessionStorage.getItem("token") ? <App /> : <Inicio />}
    </UsuarioProvider>
    <Footer />
  </React.StrictMode>
);
