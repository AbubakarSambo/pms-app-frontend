import { Pane } from "evergreen-ui";
import Sidebar from "./Sidebar";
import Content from "./Content";
import TopNavbar from "./TopNavBar";
import { useEffect } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { fetchProperties } from "../utils/service";
import { useAuthContext } from "../hooks/useAuthContext";

const DashboardLayout = () => {
  const { properties, setProperties, setActiveProperty, activeProperty } =
    useAppContext();
  const { authData } = useAuthContext();
  useEffect(() => {
    const getAllProperties = async (orgId: string) => {
      try {
        const { data } = await fetchProperties(orgId);
        setProperties(data);
        setActiveProperty(data[0]);
      } catch (error) {
        alert(`Error: ${error}`); // Show browser alert
        console.error("Error fetching properties:", error);
      }
    };

    authData?.orgId && getAllProperties(authData.orgId);
  }, [setActiveProperty, setProperties]); // Ensure fetchProperties is stable

  return (
    <Pane display="flex">
      <Sidebar />
      <Pane flex={1} display="flex" flexDirection="column">
        {/* TopNavbar will update when properties are fetched */}
        <TopNavbar
          activeProperty={activeProperty}
          properties={properties}
          setActiveProperty={setActiveProperty}
        />
        <Content />
      </Pane>
    </Pane>
  );
};

export default DashboardLayout;
