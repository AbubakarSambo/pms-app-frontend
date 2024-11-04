import React from "react";
import { Pane, Heading } from "evergreen-ui";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <Pane display="flex" height="100vh">
      <Pane width="20%" background="tint1" padding={16}>
        <Heading size={600} marginBottom={16}>
          Dashboard
        </Heading>
      </Pane>
      <Pane flex="1" padding={16}>
        {children}
      </Pane>
    </Pane>
  );
};

export default DashboardLayout;
