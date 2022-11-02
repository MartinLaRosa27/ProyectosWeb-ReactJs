import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Proyecto } from "./components/proyecto/Proyecto";
import { Principal } from "./components/principal/Principal";
import { useUsuario } from "./hook/useUsuario";
import { ProyectoProvider } from "./context/ProyectoProvider";
import { TareaProvider } from "./context/TareaProvider";

function App() {
  // --------------------------------------------------------------------------- //
  const { usuario } = useUsuario();

  // --------------------------------------------------------------------------- //
  return (
    <>
      <BrowserRouter>
        <ProyectoProvider>
          <TareaProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Principal usuario={usuario} />}></Route>
              <Route
                path="/home"
                element={<Principal usuario={usuario} />}
              ></Route>
              <Route
                path="/proyecto/:proyectoId"
                element={<Proyecto />}
              ></Route>
              <Route
                path="*"
                element={
                  <div
                    className="alert alert-danger text-center mt-5 mb-5 container"
                    role="alert"
                  >
                    ERROR 404 - PAGE NOT FOUND
                  </div>
                }
              ></Route>
            </Routes>
          </TareaProvider>
        </ProyectoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
