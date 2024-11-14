import {
  Pane,
  Text,
  Button,
  Heading,
  HeadsetIcon,
  Icon,
  SmallCrossIcon,
  Link,
} from "evergreen-ui";
import "./styles.css";
import { useLocation } from "react-router-dom";
import NumberCircle from "../components/NumberCircle";

const NON_STEPPER_PATHS = ["/onboarding/plans"];
interface OnboardingLayoutProps {
  children: React.ReactNode;
}

const OnboardingLayout = ({ children }: OnboardingLayoutProps) => {
  const location = useLocation();
  const shouldShowStepper = !NON_STEPPER_PATHS.includes(location.pathname);

  return (
    <Pane display="flex" flexDirection="column" width="100%" height="50%">
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding={16}
        className="top-pane"
      >
        <Pane display="flex" alignItems="center">
          <Heading size={600}>YourLogo</Heading>
        </Pane>
        {shouldShowStepper && (
          <Pane className="number-stepper">
            <NumberCircle />
          </Pane>
        )}

        <Pane display="flex" alignItems="center" gap={12}>
          <Heading size={100}>Need Help?</Heading>
          <Button iconBefore={HeadsetIcon}>Contact Us</Button>
          <Icon icon={SmallCrossIcon} />
        </Pane>
      </Pane>

      <Pane marginTop={20} marginX={20}>
        {children}
      </Pane>
      {!shouldShowStepper && (
        <Pane display="flex" justifyContent="center" marginTop={8}>
          <Text marginRight={4}>Already have an account</Text>

          <Link textDecoration="underline" href="/auth/login">
            Log in?
          </Link>
        </Pane>
      )}
    </Pane>
  );
};

export default OnboardingLayout;
