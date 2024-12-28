import {
  BookIcon,
  GridViewIcon,
  HomeIcon,
  IconComponent,
  ThIcon,
  UserIcon,
} from "evergreen-ui";
import React from "react";

const Dashboard = React.lazy(() => import("../pages/Dashboard/Dashboard"));
const Profile = React.lazy(() => import("../pages/Profile/Profile"));
const Rooms = React.lazy(() => import("../pages/Rooms/Rooms"));
const Properties = React.lazy(() => import("../pages/Properties/Properties"));
const Reservations = React.lazy(
  () => import("../pages/Reservations/Reservations")
);
const Staff = React.lazy(() => import("../pages/Staff/Staff"));

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
  {
    path: "/reservations",
    name: "Reservations",
    element: Reservations,
    roles: ["Super Admin"],
    icon: BookIcon,
  },
  {
    path: "/staff",
    name: "Staff",
    element: Staff,
    roles: ["Super Admin"],
    icon: UserIcon,
  },
  {
    path: "/profile",
    name: "Profile",
    element: Profile,
    roles: [
      "Super Admin",
      "Admin",
      "Viewer",
      "Guest Service Manager",
      "Front Desk",
    ],
    icon: UserIcon,
  },
  {
    path: "/rooms",
    name: "Rooms",
    element: Rooms,
    roles: [
      "Super Admin",
      "Admin",
      "Viewer",
      "Guest Service Manager",
      "Front Desk",
    ],
    icon: ThIcon,
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
