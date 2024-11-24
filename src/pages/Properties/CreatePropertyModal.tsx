import { Button, Dialog, Pane, TextInputField } from "evergreen-ui";
import React, { useState } from "react";

interface ICreateProperty {
  isShown: boolean;
  setIsShown: (show: boolean) => void;
}
export const CreateProperty = ({ isShown, setIsShown }: ICreateProperty) => {
  const [property, setProperty] = useState("");
  return (
    <Dialog
      isShown={isShown}
      title="Create Property"
      onCloseComplete={() => setIsShown(false)}
      preventBodyScrolling
      confirmLabel="Create"
      intent="none"
      //   onConfirm={}
    >
      <TextInputField
        label="Name"
        type="text"
        marginBottom={16}
        value={property}
        onChange={(e: any) => setProperty(e.target.value)}
        name="password"
      />
    </Dialog>
  );
};
