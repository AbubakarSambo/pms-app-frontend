import { useContext } from "react";
import { AppContext, AppContextData } from "../context/AppProvider";

export const useAppContext = (): AppContextData => {
  const context = useContext<AppContextData>(AppContext);
  return context;
};
