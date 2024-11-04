import React, { useState } from "react";
import { Pane, Heading, Text, Button, TextInput } from "evergreen-ui";

function VerificationPage() {
  const [code, setCode] = useState(Array(6).fill("")); // Array to hold each digit of the code

  // Update the specific code index with the typed value
  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1) {
      // Ensure only single digit
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
    }
  };

  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="90vh"
    >
      <Pane width={400} textAlign="center" padding={24}>
        <Heading size={700} marginBottom={16}>
          Verification Code
        </Heading>
        <Text color="muted" marginBottom={24}>
          We’ve sent a code to <strong>jon.doe@welkem.com</strong>
        </Text>

        <Pane display="flex" justifyContent="space-between" marginBottom={24}>
          {/* Render each code input box */}
          {code.map((digit, index) => (
            <TextInput
              key={index}
              width={50}
              height={50}
              fontSize={24}
              textAlign="center"
              value={digit}
              onChange={(e: any) => handleInputChange(index, e.target.value)}
              maxLength={1} // Ensure only one character can be entered
            />
          ))}
        </Pane>

        <Button appearance="none" intent="none" width="100%" marginBottom={16}>
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

export default VerificationPage;
