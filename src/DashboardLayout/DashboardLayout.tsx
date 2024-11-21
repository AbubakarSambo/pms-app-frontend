import { Pane } from "evergreen-ui";
import Sidebar from "./Sidebar";
import Content from "./Content";
import TopNavbar from "./TopNavBar";

const DashboardLayout = () => {
  return (
    <Pane display="flex">
      <Sidebar />
      <Pane flex={1} display="flex" flexDirection="column">
        <TopNavbar />
        <Content />
      </Pane>
    </Pane>
  );
};

export default DashboardLayout;
