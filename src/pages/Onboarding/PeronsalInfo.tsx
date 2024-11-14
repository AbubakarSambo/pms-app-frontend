import {
  ChevronLeftIcon,
  Pane,
  Button,
  Heading,
  TextInputField,
} from "evergreen-ui";
import { useNavigate } from "react-router-dom";

export const PersonalInfo = () => {
  const navigate = useNavigate();
  return (
    <Pane>
      <Button onClick={() => navigate(-1)} iconBefore={ChevronLeftIcon}>
        Back
      </Button>
      <Pane marginTop={80} display="flex" flexDirection="column">
        <Pane
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginBottom={30}
        >
          <Heading size={600}>PERSONAL INFORMATION</Heading>
          <Heading size={200}>Provide essential information to proceed</Heading>
        </Pane>

        <Pane display="flex" alignItems="center" flexDirection="column">
          <TextInputField
            label="Full Name"
            placeholder="Raphael Nweke"
            width={300}
          />
          <TextInputField
            label="Email Address"
            placeholder="Raphael@Nweke.com"
            width={300}
          />
          <TextInputField
            label="Phone Number"
            placeholder="+2348077767656"
            width={300}
          />
          <Button width="300" marginBottom={12} appearance="none" marginTop={8}>
            Next
          </Button>
        </Pane>
      </Pane>
    </Pane>
  );
};
