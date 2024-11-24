import { Pane, Heading, Button } from "evergreen-ui";
import { useState } from "react";
import { CreateProperty } from "./CreatePropertyModal";

const Properties = () => {
  const [isShown, setIsShown] = useState(false);
  const handleCreateNewProperty = () => {
    setIsShown(true);
  };
  return (
    <>
      <Pane padding={16}>
        <Heading size={700} marginBottom={24}>
          Properties
        </Heading>
        <Pane
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          marginBottom={16}
        >
          <Button appearance="none" onClick={handleCreateNewProperty}>
            + New Property
          </Button>
        </Pane>
      </Pane>
      <CreateProperty isShown={isShown} setIsShown={setIsShown} />
    </>
  );
};

export default Properties;
