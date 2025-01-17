import { Pane, TextInputField, RadioGroup, Text } from "evergreen-ui";

const ReservationTab = ({
  setReservationStatus,
  reservationStatus,
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
}: any) => {
  return (
    <Pane>
      <Text size={500} marginBottom={8}>
        NGN 30,000 / Night
      </Text>
      <Text size={400} marginBottom={16}>
        Guest is staying for a duration of 21 nights
      </Text>
      <TextInputField
        label="Check In"
        type="date"
        value={checkIn}
        onChange={(e: any) => setCheckIn(e.target.value)}
        required
      />
      <TextInputField
        label="Check Out"
        type="date"
        value={checkOut}
        onChange={(e: any) => setCheckOut(e.target.value)}
        required
      />

      <RadioGroup
        label="Status"
        value={reservationStatus}
        options={[
          { label: "Reserved", value: "reserved" },
          { label: "Checked In", value: "checkedIn" },
          { label: "Booked", value: "booked" },
        ]}
        onChange={(e: any) => setReservationStatus(e.target.value)}
      />
    </Pane>
  );
};

export default ReservationTab;
