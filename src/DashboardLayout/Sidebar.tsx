import React, { useState } from "react";
import {
  Pane,
  Tab,
  Heading,
  Icon,
  GridViewIcon,
  TabNavigation,
  BoxIcon,
  CreditCardIcon,
  UserIcon,
  HomeIcon,
  IconComponent,
  IconButton,
  MenuIcon,
  LogOutIcon,
} from "evergreen-ui";
import { NavLink, useNavigate } from "react-router-dom";
import Session from "supertokens-web-js/recipe/session";
import { useAuthContext } from "../hooks/useAuthContext";

const tabs: { name: string; path: string; icon: IconComponent }[] = [
  { name: "Dashboard", path: "/dashboard", icon: GridViewIcon },
  { name: "Reservations", path: "/reservations", icon: BoxIcon },
  { name: "Payments", path: "/billing", icon: CreditCardIcon },
  { name: "Staff Management", path: "/staff-management", icon: UserIcon },
  { name: "Rooms", path: "/rooms", icon: HomeIcon },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { authData, setAuthData } = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await Session.signOut();
    setAuthData({
      ...authData,
      isAuthenticated: false,
    });
    navigate("/auth/login");
  };
  return (
    <TabNavigation>
      <Pane
        width={isCollapsed ? 60 : 240}
        height="100vh"
        display="flex"
        flexDirection="column"
        transition="width 0.2s ease-in-out"
        borderRight="1px solid #E4E7EB"
      >
        <Pane display="flex" justifyContent="space-between">
          {!isCollapsed && (
            <Heading size={600} marginBottom={24} paddingX={16} paddingTop={16}>
              Logo
            </Heading>
          )}
          <Pane
            display="flex"
            justifyContent={isCollapsed ? "center" : "flex-end"}
            alignItems="center"
            marginBottom={16}
          >
            <IconButton
              size="large"
              icon={MenuIcon}
              appearance="minimal"
              onClick={() => setIsCollapsed(!isCollapsed)}
              aria-label="Toggle Sidebar"
            />
          </Pane>
        </Pane>

        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            style={({ isActive }) => ({
              display: "flex",
              padding: "12px 16px",
              textDecoration: "none",
              borderRadius: 4,
              color: isActive ? "#7E6363" : "inherit",
              background: isActive ? "#F5F4F4" : "transparent",
              // fontWeight: isActive ? 600 : 400,
              alignItems: "center",
            })}
          >
            <Icon size={15} icon={tab.icon} />
            {!isCollapsed && (
              <Heading paddingLeft={6} size={400}>
                {tab.name}
              </Heading>
            )}
          </NavLink>
        ))}
        <Pane onClick={handleLogout} paddingX={10} marginTop="auto">
          <Icon icon={LogOutIcon} />
          {!isCollapsed && <Tab>Sign Out</Tab>}
        </Pane>
      </Pane>
    </TabNavigation>
  );
};

export default Sidebar;
