
import { useContext } from "react";
import { TitleColorContext } from "../components/context/TitleColorContext.jsx";

export const useTitleColorContext = () => {
  const context = useContext(TitleColorContext);

  if (!context) {
    console.log("Contexto não encontrado!");
  }
  return context;
};
