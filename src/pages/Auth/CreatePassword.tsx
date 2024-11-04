import React, { useState } from "react";
import {
  Pane,
  Heading,
  Text,
  TextInput,
  Button,
  TickCircleIcon,
  CrossIcon,
} from "evergreen-ui";

function CreatePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasMinLength = password.length >= 8;

  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="90vh"
    >
      <Pane width={400} textAlign="center" padding={24}>
        <Heading size={700} marginBottom={8}>
          Password Creation
        </Heading>
        <Text color="muted" marginBottom={24}>
          Set up your new password to access your account.
        </Text>

        <Pane marginBottom={16} textAlign="left">
          <Text marginBottom={8} display="block">
            Create a Password <Text color="red">*</Text>
          </Text>
          <TextInput
            type="password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            placeholder="Enter your password"
            width="100%"
            marginBottom={8}
          />

          <Text marginBottom={8} display="block">
            Confirm Password <Text color="red">*</Text>
          </Text>
          <TextInput
            type="password"
            value={confirmPassword}
            onChange={(e: any) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            width="100%"
            marginBottom={8}
          />

          {/* Password Strength Indicator */}
          <Pane display="flex" justifyContent="space-between" marginBottom={8}>
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
          <Pane marginBottom={16}>
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
            >
              {hasMinLength ? (
                <TickCircleIcon size={12} color="green" marginRight={4} />
              ) : (
                <CrossIcon color="red" size={12} marginRight={4} />
              )}
              At least 8 characters
            </Text>
          </Pane>
        </Pane>

        <Button
          appearance="none"
          intent="none"
          width="100%"
          marginBottom={16}
          disabled={
            !hasUppercase ||
            !hasNumber ||
            !hasMinLength ||
            password !== confirmPassword
          }
        >
          Verify
        </Button>

        <Text size={300} color="muted">
          Experiencing issues receiving the code?{" "}
          <Text cursor="pointer">Resend code</Text>
        </Text>
      </Pane>
    </Pane>
  );
}

export default CreatePassword;
