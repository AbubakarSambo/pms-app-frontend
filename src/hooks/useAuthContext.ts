import { useContext } from "react";
import { AuthContext, AuthContextData } from "../context/Provider";

export const useAuthContext = (): AuthContextData => {
  const context = useContext<AuthContextData>(AuthContext);
  console.group({ context });
  // if (context === undefined) {
  //   throw new Error("useMyContext must be used within a MyProvider");
  // }
  return context;
};
