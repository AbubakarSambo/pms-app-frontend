import { Button, Tooltip } from "evergreen-ui";
import { IRoom } from "../Rooms/Rooms";
import { useEffect, useState } from "react";
import { fetchRooms } from "./service";
import { useAppContext } from "../../hooks/useAppContext";

enum RoomStatus {
  occupied = "blue",
  available = "green",
  dirty = "yellow",
  selected = "teal",
}

export const RoomsTab = ({
  // rooms,
  selectedRoom,
  setSelectedRoom,
}: any) => {
  const { activeProperty } = useAppContext();
  const [rooms, setRooms] = useState<IRoom[]>([]);

  useEffect(() => {
    const fetchAllRooms = async (propertyId: string) => {
      const { data } = await fetchRooms(propertyId);
      setRooms(data);
    };
    fetchAllRooms(activeProperty.id);
  }, [activeProperty.id]);

  const handleRoomClick = (roomNumber: any) => {
    setSelectedRoom(rooms.find((g) => g.id === roomNumber));
  };
  return (
    <>
      {rooms.map((room) => (
        <Tooltip key={room.id} content={`Room ${room.name}`}>
          <Button
            height={40}
            appearance="none"
            marginX={8}
            intent="none"
            backgroundColor={
              selectedRoom?.name === room?.name
                ? RoomStatus["selected"]
                : RoomStatus[room.status as keyof typeof RoomStatus]
            }
            onClick={() => handleRoomClick(room.id)}
          >
            {room.name}
          </Button>
        </Tooltip>
      ))}
    </>
  );
};
