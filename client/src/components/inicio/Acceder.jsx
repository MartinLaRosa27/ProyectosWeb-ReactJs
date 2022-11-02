import React, { useState } from "react";
import { useUsuario } from "../../hook/useUsuario";

export const Acceder = () => {
  // --------------------------------------------------------------------------- //
  const { verificarUsuario } = useUsuario();

  // --------------------------------------------------------------------------- //
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  // --------------------------------------------------------------------------- //
  return (
    <div className="modal-dialog">
      <div className="modal-content container">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Acceder a una cuenta
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        {/* form */}
        <div className="pt-3 pb-5">
          <form onSubmit={(e) => verificarUsuario(e, usuario)}>
            <div className="form-floating">
              <input
                type="email"
                className="form-control mt-3"
                minLength="5"
                maxLength="90"
                required
                onChange={(e) =>
                  setUsuario({
                    ...usuario,
                    email: e.target.value,
                  })
                }
              ></input>
              <label>Email</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control mt-3"
                minLength="8"
                maxLength="25"
                required
                onChange={(e) =>
                  setUsuario({
                    ...usuario,
                    password: e.target.value,
                  })
                }
              ></input>
              <label>Contraseña</label>
            </div>
            <button
              className="w-100 btn btn-lg btn-primary mt-3 text-uppercase border-0"
              type="submit"
            >
              Acceder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
