import { useContext } from "react";
import tareaContext from "../context/TareaProvider";

export const useTarea = () => {
  return useContext(tareaContext);
};
