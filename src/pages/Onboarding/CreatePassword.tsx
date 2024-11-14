import {
  Pane,
  Heading,
  Text,
  Button,
  TickCircleIcon,
  CrossIcon,
  ChevronLeftIcon,
  TextInputField,
} from "evergreen-ui";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

export const CreatePassword = () => {
  const { authData, setAuthData } = useAuthContext();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasMinLength = password.length >= 8;
  const passwordsMatch = password === confirmPassword;

  const handlePasswordPageNext = () => {
    if (passwordsMatch) {
      setAuthData({
        ...authData,
        password,
      });
      navigate("/onboarding/summary");
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
          <Heading size={700} marginBottom={8}>
            Password Creation
          </Heading>
          <Text color="muted">
            Set up your new password to access your account.
          </Text>
        </Pane>
      </Pane>

      <Pane display="flex" alignItems="center" flexDirection="column">
        <TextInputField
          label="Create a Password"
          placeholder="*****"
          type="password"
          width={300}
          onChange={(e: any) => setPassword(e.target.value)}
        />

        <TextInputField
          label="Confirm  Password"
          onChange={(e: any) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="*****"
          width={300}
        />

        <Pane display="flex" justifyContent="space-between">
          <Pane
            height={4}
            width="30%"
            backgroundColor={hasUppercase ? "green" : "red"}
          />
          <Pane
            height={4}
            width="30%"
            backgroundColor={hasNumber ? "green" : "red"}
          />
          <Pane
            height={4}
            width="30%"
            backgroundColor={hasMinLength ? "green" : "red"}
          />
        </Pane>

        {/* Password requirements list */}
        <Pane marginBottom={16} width={300}>
          <Text
            size={300}
            display="flex"
            alignItems="center"
            color={hasUppercase ? "green" : "muted"}
            marginBottom={6}
          >
            {hasUppercase ? (
              <TickCircleIcon size={12} color="green" marginRight={4} />
            ) : (
              <CrossIcon color="red" size={12} marginRight={4} />
            )}
            At least 1 uppercase
          </Text>
          <Text
            size={300}
            display="flex"
            alignItems="center"
            color={hasNumber ? "green" : "muted"}
            marginBottom={6}
          >
            {hasNumber ? (
              <TickCircleIcon size={12} color="green" marginRight={4} />
            ) : (
              <CrossIcon color="red" size={12} marginRight={4} />
            )}
            At least 1 number
          </Text>
          <Text
            size={300}
            display="flex"
            alignItems="center"
            color={hasMinLength ? "green" : "muted"}
            marginBottom={6}
          >
            {hasMinLength ? (
              <TickCircleIcon size={12} color="green" marginRight={4} />
            ) : (
              <CrossIcon color="red" size={12} marginRight={4} />
            )}
            At least 8 characters
          </Text>
          <Text
            size={300}
            display="flex"
            alignItems="center"
            color={passwordsMatch ? "green" : "muted"}
          >
            {passwordsMatch ? (
              <TickCircleIcon size={12} color="green" marginRight={4} />
            ) : (
              <CrossIcon color="red" size={12} marginRight={4} />
            )}
            Passwords match
          </Text>
        </Pane>
        <Button
          appearance="none"
          intent="none"
          width={300}
          marginBottom={16}
          disabled={
            !hasUppercase ||
            !hasNumber ||
            !hasMinLength ||
            password !== confirmPassword
          }
          onClick={handlePasswordPageNext}
        >
          Next
        </Button>
      </Pane>
    </Pane>
  );
};
