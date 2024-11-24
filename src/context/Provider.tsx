import { createContext, useState } from "react";

export interface AuthContextData {
  authData: Record<any, any>;
  setAuthData: (e: any) => void;
}

export const AuthContext = createContext<AuthContextData>({
  authData: {
    roles: [],
  },
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
