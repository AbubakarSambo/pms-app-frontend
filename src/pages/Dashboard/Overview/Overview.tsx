import { Pane, Heading, Button, Text } from "evergreen-ui";

const Overview = () => {
  return (
    <Pane padding={16}>
      <Heading size={700} marginBottom={24}>
        Dashboard
      </Heading>
      <Pane
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={16}
      >
        <Pane>
          <Text size={600}>Reservations</Text>
          <Text size={600} marginLeft={8}>
            340
          </Text>
        </Pane>
        <Button appearance="none">+ New Reservation</Button>
      </Pane>
      <Pane
        height={12}
        width="100%"
        background="tint2"
        borderRadius={4}
        overflow="hidden"
      >
        <Pane height="100%" width="25%" background="blue500" />
      </Pane>
      <Pane>
        <Text>Reservation Stats (e.g., New, Confirmed, Arrivals)</Text>
      </Pane>
    </Pane>
  );
};

export default Overview;
