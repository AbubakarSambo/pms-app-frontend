import { Dialog, SelectField, TextInputField } from "evergreen-ui";
import React, { useEffect, useState } from "react";
import { createUserApi } from "./service";
import { fetchProperties, fetchRoles } from "../../utils/service";

interface ICreateStaffModal {
  isShown: boolean;
  setIsShown: (show: boolean) => void;
}
export interface ICreateStaff {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  roleId: string;
  propertyId: string;
}
export const CreateStaff = ({ isShown, setIsShown }: ICreateStaffModal) => {
  const [roles, setRoles] = useState<{ id?: string; name?: string }[]>([]);
  const [properties, setProperties] = useState<
    { id?: string; name?: string }[]
  >([]);
  const [data, setData] = useState<ICreateStaff>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    roleId: "",
    propertyId: "",
  });

  useEffect(() => {
    const fetchAllRoles = async () => {
      const roles = await fetchRoles();
      setRoles(roles);
      if (roles.length > 0) {
        // Automatically set the first role if available
        setData((prev) => ({ ...prev, roleId: roles[0].id }));
      }
    };

    const fetchAllProperties = async () => {
      const { data } = await fetchProperties();
      setProperties(data);
      if (data.length > 0) {
        // Automatically set the first property if available
        setData((prev) => ({ ...prev, propertyId: data[0].id }));
      }
    };
    // const fetchAllRoles = async () => {
    //   const roles = await fetchRoles();
    //   setRoles(roles);
    // };
    // const fetchAllProperties = async () => {
    //   const { data } = await fetchProperties();
    //   setProperties(data);
    // };

    fetchAllRoles();
    fetchAllProperties();
  }, []);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };
  const createUser = async () => {
    await createUserApi(data);
    handleClose();
  };
  const handleClose = () => {
    setIsShown(false);
  };

  return (
    <Dialog
      isShown={isShown}
      title="Create Staff"
      onCloseComplete={handleClose}
      preventBodyScrolling
      confirmLabel="Create"
      intent="none"
      onConfirm={createUser}
    >
      <TextInputField
        label="First Name"
        type="text"
        marginBottom={16}
        value={data.firstName}
        onChange={handleChange}
        name="firstName"
      />
      <TextInputField
        label="Last Name"
        type="text"
        marginBottom={16}
        value={data.lastName}
        onChange={handleChange}
        name="lastName"
      />

      <SelectField
        name="roleId"
        label="Role"
        value={data.roleId}
        onChange={handleChange}
        defaultValue={roles[0]?.id}
      >
        {roles.map((role) => (
          <option value={role.id}>{role.name}</option>
        ))}
      </SelectField>

      <SelectField
        name="propertyId"
        label="Property"
        value={data.propertyId}
        onChange={handleChange}
        defaultValue={properties[0]?.id}
      >
        {properties.map((property) => (
          <option value={property.id}>{property.name}</option>
        ))}
      </SelectField>

      <TextInputField
        label="Email"
        type="text"
        marginBottom={16}
        value={data.email}
        onChange={handleChange}
        name="email"
      />
      <TextInputField
        label="Phone"
        type="text"
        marginBottom={16}
        value={data.phone}
        onChange={handleChange}
        name="phone"
      />
    </Dialog>
  );
};
