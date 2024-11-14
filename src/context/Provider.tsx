import { ReactElement, createContext, useState } from "react";

export interface AuthContextData {
  authData: Record<string, string>;
  setAuthData: (e: any) => void;
}

export const AuthContext = createContext<AuthContextData>({
  authData: {},
  setAuthData: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [authData, setAuthData] = useState({});

  return (
    <AuthContext.Provider
      value={{
        authData,
        setAuthData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
