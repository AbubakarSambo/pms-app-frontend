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
} from "evergreen-ui";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { ElementType } from "react";

export const Summary = () => {
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
            <SummaryItem label="FULL NAME" icon={UserIcon} />
            <SummaryItem label="EMAIL ADDRESS" icon={InboxIcon} />
            <SummaryItem label="PHONE NUMBER" icon={PhoneIcon} />
            <SummaryItem last label="ROLE" icon={PersonIcon} />
          </Pane>
          <Button
            width="300px"
            marginBottom={12}
            appearance="none"
            marginTop={8}
          >
            Finish
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
}: {
  label: string;
  last?: boolean;
  icon: ElementType;
}) => {
  console.log({ last });
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
        <Text size={300}>John Doe</Text>
      </Pane>
      <Icon icon={EditIcon} color={last ? "disabled" : ""} />
    </Pane>
  );
};
