import { useContext } from "react";
import proyectoContext from "../context/ProyectoProvider";

export const useProyecto = () => {
  return useContext(proyectoContext);
};
