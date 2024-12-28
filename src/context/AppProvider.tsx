import { createContext, useState } from "react";

export interface AppContextData {
  properties: Record<any, any>;
  setProperties: (e: any) => void;
  activeProperty: Record<any, any>;
  setActiveProperty: (e: any) => void;
}

export const AppContext = createContext<AppContextData>({
  properties: [],
  setProperties: () => [],
  activeProperty: {},
  setActiveProperty: () => {},
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [properties, setProperties] = useState([]);
  const [activeProperty, setActiveProperty] = useState({});

  return (
    <AppContext.Provider
      value={{
        properties,
        setProperties,
        activeProperty,
        setActiveProperty,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
