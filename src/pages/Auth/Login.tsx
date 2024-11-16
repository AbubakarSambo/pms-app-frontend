import {
  Pane,
  TextInputField,
  Button,
  Heading,
  Text,
  Checkbox,
  Link,
  Spinner,
} from "evergreen-ui";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "supertokens-web-js/recipe/emailpassword";
import { useAuthContext } from "../../hooks/useAuthContext";

const Login = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { authData, setAuthData } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSignIn = async () => {
    setIsLoading(true);
    const response = await signIn({
      formFields: [
        {
          id: "email",
          value: userInfo.email,
        },
        {
          id: "password",
          value: userInfo.password,
        },
      ],
    });
    if (response.status === "OK") {
      setAuthData({
        ...authData,
        isAuthenticated: true,
      });
      setIsLoading(false);
      navigate("/dashboard");
    }
  };
  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="90vh"
    >
      <Pane width={400} padding={24}>
        <Pane display="flex" flexDirection="column" alignItems="center">
          <Heading size={600} marginBottom={16}>
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
          value={userInfo.email}
          onChange={handleChange}
          name="email"
        />
        <TextInputField
          label="Password"
          type="password"
          placeholder="••••••••"
          marginBottom={16}
          value={userInfo.password}
          onChange={handleChange}
          name="password"
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
        <Button
          onClick={handleSignIn}
          appearance="none"
          width="100%"
          height={40}
        >
          {isLoading ? <Spinner color="white" size={32} /> : "Sign In"}
        </Button>
      </Pane>
    </Pane>
  );
};

export default Login;
