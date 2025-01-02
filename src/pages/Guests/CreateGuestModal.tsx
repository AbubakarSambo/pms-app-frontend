import { Dialog, TextInputField } from "evergreen-ui";
import React, { useState } from "react";
import { createGuestApi } from "./service";
import { useAuthContext } from "../../hooks/useAuthContext";

interface ICreateGuest {
  isShown: boolean;
  setIsShown: (show: boolean) => void;
}

export const CreateGuest = ({ isShown, setIsShown }: ICreateGuest) => {
  const { authData } = useAuthContext();

  const [guest, setGuest] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organizationId: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setGuest({
      ...guest,
      [name]: value,
    });
  };
  const handleClose = () => {
    setIsShown(false);
  };

  const createGuest = async () => {
    await createGuestApi(guest, authData.orgId);
    handleClose();
  };

  return (
    <Dialog
      isShown={isShown}
      title="Create Guest"
      onCloseComplete={handleClose}
      preventBodyScrolling
      confirmLabel="Create"
      intent="none"
      onConfirm={createGuest}
    >
      <TextInputField
        label="First Name"
        type="text"
        marginBottom={16}
        value={guest.firstName}
        onChange={handleChange}
        name="firstName"
      />
      <TextInputField
        label="Last Name"
        type="text"
        marginBottom={16}
        value={guest.lastName}
        onChange={handleChange}
        name="lastName"
      />
      <TextInputField
        label="Email"
        type="text"
        marginBottom={16}
        value={guest.email}
        onChange={handleChange}
        name="email"
      />
      <TextInputField
        label="Phone"
        type="text"
        marginBottom={16}
        value={guest.phone}
        onChange={handleChange}
        name="phone"
      />
    </Dialog>
  );
};
