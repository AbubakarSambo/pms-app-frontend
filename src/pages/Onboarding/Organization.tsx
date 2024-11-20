import {
  ChevronLeftIcon,
  Pane,
  Button,
  Heading,
  TextInputField,
} from "evergreen-ui";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

export const Organization = () => {
  const { authData, setAuthData } = useAuthContext();

  const navigate = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setAuthData({
      ...authData,
      [name]: value,
    });
  };

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
          <Heading size={600}>Organization</Heading>
          <Heading size={200}>Provide essential information to proceed</Heading>
        </Pane>

        <Pane display="flex" alignItems="center" flexDirection="column">
          <TextInputField
            label="Organization Name"
            placeholder="Sample Organization"
            width={300}
            name="organization"
            onChange={handleInputChange}
            value={authData.organization}
          />

          <Button
            onClick={() => navigate("/onboarding/summary")}
            width="300"
            marginBottom={12}
            appearance="none"
            marginTop={8}
          >
            Next
          </Button>
        </Pane>
      </Pane>
    </Pane>
  );
};
