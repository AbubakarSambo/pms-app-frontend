import { Dialog, TextInputField } from "evergreen-ui";
import React, { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { createPropertyApi } from "./service";

interface ICreateProperty {
  isShown: boolean;
  setIsShown: (show: boolean) => void;
}
export interface ICreatePropertyModal {
  name: string;
  address: string;
}

export const CreateProperty = ({ isShown, setIsShown }: ICreateProperty) => {
  const { authData } = useAuthContext();

  const [property, setProperty] = useState({
    name: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setProperty({
      ...property,
      [name]: value,
    });
  };
  const handleClose = () => {
    setIsShown(false);
  };

  const createProperty = async () => {
    await createPropertyApi(property, authData.orgId);
    handleClose();
  };

  return (
    <Dialog
      isShown={isShown}
      title="Create Property"
      onCloseComplete={handleClose}
      preventBodyScrolling
      confirmLabel="Create"
      intent="none"
      onConfirm={createProperty}
    >
      <TextInputField
        label="Name"
        type="text"
        marginBottom={16}
        value={property.name}
        onChange={handleChange}
        name="name"
      />
      <TextInputField
        label="Address"
        type="text"
        marginBottom={16}
        value={property.address}
        onChange={handleChange}
        name="address"
      />
    </Dialog>
  );
};
