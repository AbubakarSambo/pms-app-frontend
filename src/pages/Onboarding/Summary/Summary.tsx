import {
  ChevronLeftIcon,
  Pane,
  Button,
  Heading,
  Icon,
  UserIcon,
  Text,
  EditIcon,
  InboxIcon,
  PhoneIcon,
  PersonIcon,
  Spinner,
  DiagramTreeIcon,
} from "evergreen-ui";
import { signUp } from "supertokens-web-js/recipe/emailpassword";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { ElementType, useState } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";

export const Summary = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { authData, setAuthData } = useAuthContext();
  const handleSignup = async () => {
    setIsLoading(true);
    const response = await signUp({
      formFields: [
        {
          id: "email",
          value: authData.email,
        },
        {
          id: "password",
          value: authData.password,
        },
        {
          id: "firstName",
          value: authData.firstName,
        },
        {
          id: "lastName",
          value: authData.lastName,
        },
        {
          id: "phone",
          value: authData.phone,
        },
        {
          id: "organization",
          value: authData.organization,
        },
        {
          id: "role",
          value: "SuperAdmin",
        },
      ],
    });
    if (response.status === "OK") {
      setAuthData({
        ...authData,
        isAuthenticated: true,
      });
      setIsLoading(false);
      window.location.href = "/dashboard";
    }
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
          <Heading size={600}>ONBOARDING SUMMARY</Heading>
          <Heading size={200}>Review and complete your account setup</Heading>
        </Pane>

        <Pane display="flex" alignItems="center" flexDirection="column">
          <Pane
            display="flex"
            flexDirection="column"
            border="default"
            borderRadius={8}
          >
            <SummaryItem
              label="FULL NAME"
              icon={UserIcon}
              value={`${authData.firstName} ${authData.lastName}`}
            />
            <SummaryItem
              label="EMAIL ADDRESS"
              icon={InboxIcon}
              value={authData.email}
            />
            <SummaryItem
              label="PHONE NUMBER"
              icon={PhoneIcon}
              value={authData.phone}
            />
            <SummaryItem
              label="Organization"
              icon={DiagramTreeIcon}
              value={authData.organization}
            />
            <SummaryItem last label="ROLE" icon={PersonIcon} value="" />
          </Pane>
          <Button
            width="300px"
            marginBottom={12}
            appearance="none"
            marginTop={8}
            onClick={handleSignup}
          >
            {isLoading ? <Spinner color="white" size={32} /> : "Finish"}
          </Button>
        </Pane>
      </Pane>
    </Pane>
  );
};

const SummaryItem = ({
  last = false,
  label,
  icon,
  value,
}: {
  label: string;
  last?: boolean;
  icon: ElementType;
  value: string;
}) => {
  return (
    <Pane
      display="flex"
      width="300px"
      alignItems="center"
      padding={8}
      backgroundColor={last ? "#F9FAFC" : ""}
    >
      <Icon icon={icon} />
      <Pane
        className={!last ? "bottom-rule" : ""}
        display="flex"
        flexDirection="column"
        flexGrow={1}
        paddingX={16}
        paddingY={4}
      >
        <Heading size={100}>{label}</Heading>
        <Text size={300}>{value}</Text>
      </Pane>
      <Icon icon={EditIcon} color={last ? "disabled" : ""} />
    </Pane>
  );
};
