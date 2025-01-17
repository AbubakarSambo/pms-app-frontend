import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // for drag and drop
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import { useAppContext } from "../../hooks/useAppContext";
import { fetchReservations, fetchRooms } from "./service";
import { CreateReservationModal } from "./CreateReservationModal";
import { Button, Heading, Pane } from "evergreen-ui";

const Reservations = () => {
  const { activeProperty } = useAppContext();
  const [rooms, setRooms] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const fetchAllRooms = async (propertyId: string) => {
      const { data } = await fetchRooms(propertyId);
      setRooms(data.map((room: any) => ({ id: room.id, title: room.name })));
    };
    activeProperty.id && fetchAllRooms(activeProperty.id);
  }, [activeProperty.id]);

  useEffect(() => {
    const fetchAllReservations = async (propertyId: string) => {
      const data = await fetchReservations(propertyId);
      setReservations(
        data.map((reservation: any) => ({
          title: `${reservation.guest.firstName} ${reservation.guest.lastName}`,
          start: new Date(reservation.checkInDate).toISOString().split("T")[0],
          end: new Date(reservation.checkOutDate).toISOString().split("T")[0],
          resourceId: reservation.room.id,
          color: reservation.status === "checkedIn" ? "green" : "red",
        }))
      );
    };
    activeProperty.id && fetchAllReservations(activeProperty.id);
  }, [activeProperty.id]);

  const handleCreateNewReservation = () => {
    setIsShown(true);
  };

  return (
    <>
      <Pane padding={16}>
        <Heading size={700} marginBottom={24}>
          Reservations
        </Heading>
        <Pane
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          marginBottom={16}
        >
          <Button appearance="none" onClick={handleCreateNewReservation}>
            + New Reservation
          </Button>
        </Pane>
      </Pane>
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
        events={reservations}
        editable={true} // Allows drag-and-drop
        eventResizableFromStart={true} // Allows resizing from the start
        resourceAreaHeaderContent="Rooms"
        resourceAreaWidth="150px"
        slotMinWidth={50}
        slotDuration="24:00:00" // Sets slots to one day
        height="100%"
      />
      <CreateReservationModal isShown={isShown} setIsShown={setIsShown} />
    </>
    // </Pane>
  );
};

export default Reservations;
