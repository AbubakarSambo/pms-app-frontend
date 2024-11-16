import { useContext } from "react";
import { AuthContext, AuthContextData } from "../context/Provider";

export const useAuthContext = (): AuthContextData => {
  const context = useContext<AuthContextData>(AuthContext);
  return context;
};
