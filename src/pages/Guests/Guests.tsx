import { useEffect, useState } from "react";

import { useAppContext } from "../../hooks/useAppContext";
import { fetchGuests } from "./service";
import {
  Button,
  ChevronLeftIcon,
  ChevronRightIcon,
  Heading,
  IconButton,
  Pane,
  Table,
  Text,
} from "evergreen-ui";
import { useAuthContext } from "../../hooks/useAuthContext";
import { CreateGuest } from "./CreateGuestModal";

export interface IGuest {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
  phone: string;
}

const Guests = () => {
  const { activeProperty } = useAppContext();
  const { authData } = useAuthContext();
  const [isShown, setIsShown] = useState(false);
  const [guests, setGuests] = useState<IGuest[]>([]);

  useEffect(() => {
    const fetchAllGuests = async (orgId: string) => {
      const { data } = await fetchGuests(orgId);
      setGuests(data);
    };
    authData.orgId && fetchAllGuests(authData.orgId);
  }, [activeProperty?.id, authData?.orgId]);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;
  const totalPages = Math.ceil(guests.length / rowsPerPage);
  const paginatedData = guests.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (direction: string) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCreateNewGuest = () => {
    setIsShown(true);
  };
  return (
    <>
      <Pane padding={16}>
        <Heading size={700} marginBottom={24}>
          Guests
        </Heading>
        <Pane
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          marginBottom={16}
        >
          <Button appearance="none" onClick={handleCreateNewGuest}>
            + New Guest
          </Button>
        </Pane>
      </Pane>
      <Pane padding={16}>
        <Table>
          <Table.Head>
            <Table.TextHeaderCell>First Name</Table.TextHeaderCell>
            <Table.TextHeaderCell>Last Name</Table.TextHeaderCell>
            <Table.TextHeaderCell>Email</Table.TextHeaderCell>
            <Table.TextHeaderCell>Phone</Table.TextHeaderCell>
          </Table.Head>
          <Table.Body>
            {paginatedData.length > 0 &&
              paginatedData.map((guest) => (
                <Table.Row key={guest.id}>
                  <Table.TextCell>{guest.firstName}</Table.TextCell>
                  <Table.TextCell>{guest.lastName}</Table.TextCell>
                  <Table.TextCell>{guest.email}</Table.TextCell>
                  <Table.TextCell>{guest.phone}</Table.TextCell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>

        <Pane
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginTop={16}
        >
          <Pane>
            <IconButton
              icon={ChevronLeftIcon}
              onClick={() => handlePageChange("prev")}
              disabled={currentPage === 1}
            />
            <Text marginX={8}>
              Page {currentPage} of {totalPages}
            </Text>
            <IconButton
              icon={ChevronRightIcon}
              onClick={() => handlePageChange("next")}
              disabled={currentPage === totalPages}
            />
          </Pane>
        </Pane>
      </Pane>
      <CreateGuest isShown={isShown} setIsShown={setIsShown} />
    </>
  );
};

export default Guests;
