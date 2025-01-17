import { Button, RadioGroup, Select, SelectMenu, Tooltip } from "evergreen-ui";
import { IRoom } from "../Rooms/Rooms";
import { useEffect, useMemo, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { fetchGuests } from "../Guests/service";
import { IGuest } from "../Guests/Guests";

export const GuestTab = ({ selectedGuest, setSelectedGuest }: any) => {
  const { authData } = useAuthContext();
  const [guests, setGuests] = useState<IGuest[]>([]);

  const handleGuestClick = (guest: any) => {
    console.log({ guest, guests });
    setSelectedGuest(guests.find((g) => g.id === guest.value));
  };

  useEffect(() => {
    const fetchAllGuests = async (orgId: string) => {
      const { data } = await fetchGuests(orgId);
      setGuests(data);
    };
    fetchAllGuests(authData.orgId);
  }, [authData.orgId]);

  const mappedGuests = guests.map((guest: any) => {
    return {
      label: `${guest.firstName} ${guest.lastName}`,
      value: guest.id,
    };
  });

  console.log({ guests, selectedGuest });
  return (
    <>
      <SelectMenu
        title="Select Guest"
        options={mappedGuests}
        selected={selectedGuest?.value}
        onSelect={handleGuestClick}
        hasFilter={false}
      >
        <Button>{`${selectedGuest?.firstName} ${selectedGuest?.lastName}`}</Button>
      </SelectMenu>
      {/* {guests.map((guest) => (
        <Tooltip key={room.id} content={`Room ${room.name}`}>
          <Button
            height={40}
            appearance="none"
            marginX={8}
            intent="none"
            backgroundColor={
              selectedRoom === room.name
                ? RoomStatus["selected"]
                : RoomStatus[room.status as keyof typeof RoomStatus]
            }
            onClick={() => handleRoomClick(room.name)}
          >
            {room.name}
          </Button>
        </Tooltip>
      ))} */}
    </>
  );
};
