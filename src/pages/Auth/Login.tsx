import {
  Pane,
  TextInputField,
  Button,
  Heading,
  Text,
  Checkbox,
  Link,
} from "evergreen-ui";
const Login = () => {
  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="90vh"
    >
      <Pane width={400} padding={24}>
        <Pane display="flex" flexDirection="column" alignItems="center">
          <Heading size={700} marginBottom={16}>
            Welcome Back
          </Heading>
          <Text color="muted" marginBottom={24} display="block">
            Please enter your details to log in.
          </Text>
        </Pane>
        <TextInputField
          label="Email Address"
          placeholder="hello@example.com"
          marginBottom={16}
        />
        <TextInputField
          label="Password"
          type="password"
          placeholder="••••••••"
          marginBottom={16}
        />
        <Pane
          display="flex"
          justifyContent="space-between"
          width="100%"
          marginBottom={24}
        >
          <Checkbox label="Keep me signed in" />
          <Pane alignItems="center" display="flex">
            <Link textDecoration="underline" href="/auth/reset-password">
              Forgot password?
            </Link>
          </Pane>
        </Pane>
        <Button appearance="none" width="100%" height={40}>
          Sign In
        </Button>
      </Pane>
    </Pane>
  );
};

export default Login;
