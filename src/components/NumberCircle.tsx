import { ChevronRightIcon, Icon, Pane, Small, Text } from "evergreen-ui";
import { useLocation } from "react-router-dom";

interface NumberCirlce {
  number: number;
  size?: number;
  color?: string;
  active?: boolean;
}
const NumberCircle = () => {
  const { pathname } = useLocation();

  return (
    <Pane display="flex" alignItems="center" gap={30}>
      <StepItem
        active={pathname === "/onboarding/personal-info"}
        label="Personal"
        number={1}
      />
      <StepItem
        active={pathname === "/onboarding/create-password"}
        label="Password"
        number={2}
      />
      <StepItem
        active={pathname === "/onboarding/organization"}
        label="Organization"
        number={3}
      />
      <StepItem
        active={pathname === "/onboarding/summary"}
        label="Summary"
        isLast
        number={4}
      />
    </Pane>
  );
};

export default NumberCircle;

interface IStepItem {
  active: boolean;
  label: string;
  isLast?: boolean;
  number: number;
}
const StepItem = ({
  active = false,
  label,
  isLast = false,
  number,
}: IStepItem) => {
  return (
    <Pane display="flex" alignItems="center">
      <Number number={number} active={active} />
      <Small marginLeft={6} fontSize={12}>
        {label}
      </Small>
      {!isLast && <Icon marginLeft={8} icon={ChevronRightIcon} color="muted" />}
    </Pane>
  );
};

const Number = ({ size = 20, number, active = false }: NumberCirlce) => {
  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={size}
      height={size}
      borderRadius="50%"
      background={active ? "blue400" : ""}
      border="default"
    >
      <Text
        color={active ? "white" : "black"}
        fontSize={size / 2}
        fontWeight="bold"
      >
        {number}
      </Text>
    </Pane>
  );
};
