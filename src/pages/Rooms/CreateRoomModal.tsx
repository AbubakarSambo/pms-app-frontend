import { Dialog, TextInputField } from "evergreen-ui";
import React, { useState } from "react";
import { createRoomApi } from "./service";
import { useAppContext } from "../../hooks/useAppContext";

interface ICreateRoom {
  isShown: boolean;
  setIsShown: (show: boolean) => void;
}
export interface ICreateRoomModal {
  name: string;
  description: string;
  pricePerNight: string;
  capacity: number;
}

export const CreateRoom = ({ isShown, setIsShown }: ICreateRoom) => {
  const { activeProperty } = useAppContext();

  const [room, setRoom] = useState({
    name: "",
    description: "",
    pricePerNight: "",
    capacity: 0,
    propertyId: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setRoom({
      ...room,
      [name]: value,
    });
  };
  const handleClose = () => {
    setIsShown(false);
  };

  const createRoom = async () => {
    room.propertyId = activeProperty.id;
    room.capacity = parseInt(room.capacity.toString());
    await createRoomApi(room);
    handleClose();
  };

  return (
    <Dialog
      isShown={isShown}
      title="Create Room"
      onCloseComplete={handleClose}
      preventBodyScrolling
      confirmLabel="Create"
      intent="none"
      onConfirm={createRoom}
    >
      <TextInputField
        label="Name"
        type="text"
        marginBottom={16}
        value={room.name}
        onChange={handleChange}
        name="name"
      />
      <TextInputField
        label="Capacity"
        type="number"
        marginBottom={16}
        value={room.capacity}
        onChange={handleChange}
        name="capacity"
      />
      <TextInputField
        label="Price"
        type="number"
        marginBottom={16}
        value={room.pricePerNight}
        onChange={handleChange}
        name="pricePerNight"
      />
      <TextInputField
        label="Description"
        type="text"
        marginBottom={16}
        value={room.description}
        onChange={handleChange}
        name="description"
      />
    </Dialog>
  );
};
