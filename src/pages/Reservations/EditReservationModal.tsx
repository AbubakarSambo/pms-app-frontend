import {
  Button,
  Dialog,
  Pane,
  RadioGroup,
  TextInputField,
  toaster,
} from "evergreen-ui";
import { useEffect, useState } from "react";
import { fetchReservationById, updateReservation } from "./service";

interface IEditReservationModal {
  isShown: boolean;
  setIsShown: (show: boolean) => void;
  activeReservationId: string;
}

export const EditReservationModal = ({
  isShown,
  setIsShown,
  activeReservationId,
}: IEditReservationModal) => {
  const [activeReservation, setActiveReservation] = useState<any>({
    checkInDate: "",
    checkOutDate: "",
  });
  useEffect(() => {
    activeReservationId &&
      fetchReservationById(activeReservationId).then((data) => {
        setActiveReservation(data);
      });
  }, [activeReservationId]);

  const handleConfirm = async () => {
    const resp = updateReservation(
      {
        checkInDate: activeReservation.checkInDate,
        checkOutDate: activeReservation.checkOutDate,
        status: activeReservation.status,
      },
      activeReservationId
    ).catch((error) => {
      toaster.danger("Failed to update reservation");
    });
  };
  if (!activeReservation.checkInDate) return null;
  return (
    <Dialog
      isShown={isShown}
      title="Edit Reservation"
      onCloseComplete={() => setIsShown(false)}
      hasFooter={false}
    >
      <Pane>
        <TextInputField
          label="Check In"
          type="date"
          value={
            new Date(activeReservation.checkInDate ?? "")
              ?.toISOString()
              .split("T")[0]
          }
          onChange={(e: any) =>
            setActiveReservation({
              ...activeReservation,
              checkInDate: e.target.value,
            })
          }
          required
        />
        <TextInputField
          label="Check Out"
          type="date"
          value={
            new Date(activeReservation.checkOutDate ?? "")
              ?.toISOString()
              .split("T")[0]
          }
          onChange={(e: any) =>
            setActiveReservation({
              ...activeReservation,
              checkOutDate: e.target.value,
            })
          }
          required
        />

        <RadioGroup
          label="Status"
          value={activeReservation.status}
          options={[
            { label: "Reserved", value: "reserved" },
            { label: "Checked In", value: "checkedIn" },
            { label: "Booked", value: "booked" },
          ]}
          onChange={(e: any) => {
            setActiveReservation({
              ...activeReservation,
              status: e.target.value,
            });
          }}
        />

        <Button marginLeft={8} onClick={handleConfirm}>
          Confirm
        </Button>
      </Pane>
    </Dialog>
  );
};
