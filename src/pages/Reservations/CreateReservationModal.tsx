import React, { useEffect, useState } from "react";
import {
  Pane,
  Dialog,
  Heading,
  Button,
  Badge,
  Text,
  Tooltip,
  //   Grid,
} from "evergreen-ui";
import Step from "../../components/Step";
import { createReservation, fetchRooms } from "./service";
import { IRoom } from "../Rooms/Rooms";
import { useAppContext } from "../../hooks/useAppContext";
import { RoomsTab } from "./RoomsTab";
import ReservationTab from "./ReservationsTab";
import { GuestTab } from "./GuestTab";
import { calculateNights } from "../../utils/functions";

interface ICreateReservationModal {
  isShown: boolean;
  setIsShown: (show: boolean) => void;
}
enum RoomStatus {
  occupied = "blue",
  available = "green",
  dirty = "yellow",
  selected = "teal",
}
export const CreateReservationModal = ({
  isShown,
  setIsShown,
}: ICreateReservationModal) => {
  const { activeProperty } = useAppContext();
  const [activeTab, setActiveTab] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState<IRoom | null>(null);
  // const [rooms, setRooms] = useState<IRoom[]>([]);
  const [reservationStatus, setReservationStatus] = useState("reserved");
  const [checkIn, setCheckIn] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [checkOut, setCheckOut] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [selectedGuest, setSelectedGuest] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchAllRooms = async (propertyId: string) => {
  //     const { data } = await fetchRooms(propertyId);
  //     setRooms(data);
  //   };
  //   fetchAllRooms(activeProperty.id);
  // }, [activeProperty.id]);

  console.log({ selectedRoom });
  const handleNextClick = () => {
    setActiveTab(activeTab + 1);
  };
  const handlePrevClick = () => {
    setActiveTab(activeTab - 1);
  };
  const handleConfirm = () => {
    const data = {
      checkInDate: checkIn,
      checkOutDate: checkOut,
      room: selectedRoom,
      guest: selectedGuest,
      status: reservationStatus,
      property: activeProperty,
      totalPrice:
        calculateNights(checkIn, checkOut) *
        parseInt(selectedRoom?.pricePerNight ?? "0", 10),
    };

    createReservation(data);
  };

  return (
    <Dialog
      isShown={isShown}
      title="Add Reservation"
      onCloseComplete={() => setIsShown(false)}
      hasFooter={false}
    >
      <Step currentStep={activeTab} />
      <Pane>
        {/* <Heading size={500}>Select room</Heading> */}
        <Pane
          // display="grid"
          // gridTemplateColumns="repeat(6, 1fr)"
          // gap={16}
          marginTop={16}
        >
          {activeTab === 1 && (
            <RoomsTab
              // rooms={rooms}
              selectedRoom={selectedRoom}
              setSelectedRoom={setSelectedRoom}
            />
          )}
          {activeTab === 2 && (
            <ReservationTab
              reservationStatus={reservationStatus}
              setReservationStatus={setReservationStatus}
              checkIn={checkIn}
              checkOut={checkOut}
              setCheckIn={setCheckIn}
              setCheckOut={setCheckOut}
            />
          )}
          {activeTab === 3 && (
            <GuestTab
              setSelectedGuest={setSelectedGuest}
              selectedGuest={selectedGuest}
            />
          )}
        </Pane>
        <Pane display="flex" justifyContent="flex-end" marginTop={16}>
          {activeTab === 1 ? (
            <Button onClick={() => setIsShown(false)}>Cancel</Button>
          ) : (
            <Button
              marginLeft={8}
              onClick={handlePrevClick}
              disabled={!selectedRoom}
            >
              Prev
            </Button>
          )}
          {activeTab !== 3 ? (
            <Button
              appearance="primary"
              marginLeft={8}
              onClick={handleNextClick}
              disabled={!selectedRoom}
            >
              Next
            </Button>
          ) : (
            <Button
              marginLeft={8}
              onClick={handleConfirm}
              disabled={!selectedRoom}
            >
              Confirm
            </Button>
          )}
        </Pane>
      </Pane>
    </Dialog>
  );
};
