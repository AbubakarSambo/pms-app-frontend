import {
  Pane,
  Heading,
  Button,
  IconButton,
  ChevronRightIcon,
  Table,
  Text,
  ChevronLeftIcon,
} from "evergreen-ui";
import { useEffect, useState } from "react";
import { CreateRoom } from "./CreateRoomModal";
import { fetchRooms } from "./service";
import { numberWithCommas } from "../../utils/functions";
import { useAppContext } from "../../hooks/useAppContext";

export interface IRoom {
  name: string;
  pricePerNight: string;
  id: string;
  capacity: number;
  status: string;
}
const Rooms = () => {
  const { activeProperty } = useAppContext();
  const [isShown, setIsShown] = useState(false);
  const [rooms, setRooms] = useState<IRoom[]>([]);

  useEffect(() => {
    const fetchAllRooms = async (propertyId: string) => {
      const { data } = await fetchRooms(propertyId);
      setRooms(data);
    };
    fetchAllRooms(activeProperty.id);
  }, [activeProperty?.id]);
  const handleCreateNewProperty = () => {
    setIsShown(true);
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;
  const totalPages = Math.ceil(rooms.length / rowsPerPage);
  const paginatedData = rooms.slice(
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
  return (
    <>
      <Pane padding={16}>
        <Heading size={700} marginBottom={24}>
          Properties
        </Heading>
        <Pane
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          marginBottom={16}
        >
          <Button appearance="none" onClick={handleCreateNewProperty}>
            + New Room
          </Button>
        </Pane>
      </Pane>
      <Pane padding={16}>
        <Table>
          <Table.Head>
            <Table.TextHeaderCell>Name</Table.TextHeaderCell>
            <Table.TextHeaderCell>Price</Table.TextHeaderCell>
          </Table.Head>
          <Table.Body>
            {paginatedData.length > 0 &&
              paginatedData.map((room) => (
                <Table.Row key={room.id}>
                  <Table.TextCell>{room.name}</Table.TextCell>
                  <Table.TextCell>
                    {numberWithCommas(room.pricePerNight)}
                  </Table.TextCell>
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
      <CreateRoom isShown={isShown} setIsShown={setIsShown} />
    </>
  );
};

export default Rooms;
