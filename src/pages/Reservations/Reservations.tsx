import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // for drag and drop
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import { useAppContext } from "../../hooks/useAppContext";
import { fetchRooms } from "./service";

const Reservations = () => {
  const { activeProperty } = useAppContext();
  const [rooms, setRooms] = React.useState([]);

  useEffect(() => {
    const fetchAllRooms = async (propertyId: string) => {
      const { data } = await fetchRooms(propertyId);
      setRooms(data.map((room: any) => ({ id: room.id, title: room.name })));
    };
    fetchAllRooms(activeProperty.id);
  }, [activeProperty.id]);

  const events = [
    {
      title: "Justin John",
      start: "2024-12-24",
      end: "2024-12-26",
      resourceId: "101",
      color: "#28a745",
    },
    {
      title: "Bilkisu Abdulkareem",
      start: "2024-12-19",
      end: "2024-12-29",
      resourceId: "104",
      color: "#dc3545",
    },
    // Add more events
  ];

  // const resources = [
  //   { id: "101", title: "Room 101" },
  //   { id: "102", title: "Room 102" },
  //   { id: "103", title: "Room 103" },
  //   { id: "104", title: "Room 104" },
  //   // Add more rooms
  // ];

  return (
    // <Pane padding={24}>
    <FullCalendar
      plugins={[
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin,
        resourceTimelinePlugin,
      ]}
      initialView="resourceTimelineWeek"
      headerToolbar={{
        left: "prev,next",
        center: "",
        right: "",
      }}
      slotLabelFormat={{
        weekday: "short",
        day: "numeric",
      }}
      schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
      resources={rooms}
      events={events}
      editable={true} // Allows drag-and-drop
      eventResizableFromStart={true} // Allows resizing from the start
      resourceAreaHeaderContent="Rooms"
      resourceAreaWidth="150px"
      slotMinWidth={50}
      slotDuration="24:00:00" // Sets slots to one day
      height="100%"
    />
    // </Pane>
  );
};

export default Reservations;
