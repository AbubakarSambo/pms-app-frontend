import { Pane, Text, Button } from "evergreen-ui";
import "./styles.css";
import BG from "../assets/bg.png";
interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Pane display="flex">
      <Pane
        className="left-pane"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        height="80%"
      >
        <Pane
          display="flex"
          justifyContent="space-between"
          width="100%"
          padding={16}
        >
          {/* Logo */}
          <Text size={600} fontWeight="bold">
            Welkem
          </Text>

          {/* Sign up link */}
          <Button appearance="minimal" intent="primary">
            Join now
          </Button>
        </Pane>
        <Pane width="100%" maxWidth={400}>
          {children}
        </Pane>
        <Pane
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          padding={16}
        >
          {/* Footer Text */}
          <Text color="muted">© 2024 Welkem</Text>

          {/* Language Selector */}
          <Text color="muted">ENG</Text>
        </Pane>
      </Pane>

      <Pane
        className="right-pane"
        flex={1}
        alignItems="center"
        justifyContent="center"
        background="tint2"
        backgroundImage={`url(${BG})`}
      />
    </Pane>
  );
};

export default AuthLayout;
