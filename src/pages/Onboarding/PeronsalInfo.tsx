import {
  ChevronLeftIcon,
  Pane,
  Button,
  Heading,
  TextInputField,
} from "evergreen-ui";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext, AuthContextData } from "../../context/Provider";
import { useAuthContext } from "../../hooks/useAuthContext";

export const PersonalInfo = () => {
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
          <Heading size={600}>PERSONAL INFORMATION</Heading>
          <Heading size={200}>Provide essential information to proceed</Heading>
        </Pane>

        <Pane display="flex" alignItems="center" flexDirection="column">
          <TextInputField
            label="First Name"
            placeholder="Raphael"
            width={300}
            name="firstName"
            onChange={handleInputChange}
            value={authData.firstName}
          />
          <TextInputField
            name="lastName"
            label="Last Name"
            placeholder="Nweke"
            width={300}
            onChange={handleInputChange}
            value={authData.lastName}
          />
          <TextInputField
            label="Email Address"
            placeholder="Raphael@Nweke.com"
            width={300}
            name="email"
            onChange={handleInputChange}
            value={authData.email}
          />
          <TextInputField
            label="Phone Number"
            placeholder="+2348077767656"
            width={300}
            name="phone"
            onChange={handleInputChange}
            value={authData.phone}
          />
          <Button
            onClick={() => navigate("/onboarding/create-password")}
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
