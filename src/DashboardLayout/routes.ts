import { GridViewIcon, HomeIcon, IconComponent } from "evergreen-ui";
import React from "react";

const Dashboard = React.lazy(() => import("../pages/Dashboard/Dashboard"));
const Properties = React.lazy(() => import("../pages/Properties/Properties"));

const routes: {
  name: string;
  path: string;
  icon: IconComponent;
  element: React.ElementType;
  roles: string[];
}[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    element: Dashboard,
    roles: ["Super Admin"],
    icon: GridViewIcon,
  },
  {
    path: "/properties",
    name: "Properties",
    element: Properties,
    roles: ["Super Admin"],
    icon: HomeIcon,
  },
];

export default routes;

export const hasMatchingRoles = (roles: string[], userRoles: string[]) => {
  return userRoles.some((userRole) => roles.includes(userRole));
};

export interface Role {
  name: string;
  property: Record<string, string>;
}
