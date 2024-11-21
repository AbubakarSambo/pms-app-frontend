import { Routes, Route } from "react-router-dom";
import routes, { Role, hasMatchingRoles } from "./routes";
import { useAuthContext } from "../hooks/useAuthContext";
import { Suspense } from "react";
import { Spinner } from "evergreen-ui";

const Content = () => {
  const { authData } = useAuthContext();
  const userRoles = authData.roles.map((role: Role) => role.name);

  return (
    <Suspense fallback={<Spinner color="primary" />}>
      <Routes>
        {routes
          .filter((route) => hasMatchingRoles(route.roles, userRoles))
          .map((route, idx) => {
            console.log({ route });
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  element={<route.element />}
                />
              )
            );
          })}
      </Routes>
    </Suspense>
  );
};

export default Content;
