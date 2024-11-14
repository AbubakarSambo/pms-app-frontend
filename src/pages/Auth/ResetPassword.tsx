import React from "react";
import {
  Pane,
  TextInputField,
  Button,
  Heading,
  Text,
  Link,
} from "evergreen-ui";
const Login = () => {
  return (
    <>
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="90vh"
      >
        <Pane width={400} textAlign="center" padding={24}>
          <Pane display="flex" flexDirection="column" alignItems="center">
            <Heading size={700} marginBottom={16}>
              Reset Password
            </Heading>
            <Text color="muted" marginBottom={24} display="block">
              Enter your email to reset your password
            </Text>
          </Pane>

          <TextInputField
            label="Email Address"
            placeholder="hello@example.com"
            marginBottom={16}
          />

          <Button appearance="none" width="100%" height={40}>
            Reset password
          </Button>
          <Pane display="flex" justifyContent="center" marginTop={10}>
            <Text color="muted" marginBottom={24} display="block">
              Change your mind?
              <Link textDecoration="underline" href="/auth/login">
                back to sign in
              </Link>
            </Text>
          </Pane>
        </Pane>
      </Pane>
    </>
  );
};

export default Login;
