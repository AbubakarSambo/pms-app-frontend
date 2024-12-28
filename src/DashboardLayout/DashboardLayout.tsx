import { Pane } from "evergreen-ui";
import Sidebar from "./Sidebar";
import Content from "./Content";
import TopNavbar from "./TopNavBar";
import { useEffect } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { fetchProperties } from "../utils/service";

const DashboardLayout = () => {
  const { properties, setProperties, setActiveProperty, activeProperty } =
    useAppContext();

  useEffect(() => {
    const getAllProperties = async () => {
      try {
        const { data } = await fetchProperties();
        setProperties(data);
        setActiveProperty(data[0]);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    getAllProperties();
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
