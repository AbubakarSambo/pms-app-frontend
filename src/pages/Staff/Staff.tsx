import {
  Pane,
  Heading,
  Button,
  Table,
  Text,
  IconButton,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "evergreen-ui";
import { useEffect, useState } from "react";
import { CreateStaff } from "./CreateStaffModal";
import { fetchStaff } from "./service";

interface IStaff {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  id: string;
}

const Staff = () => {
  const [isShown, setIsShown] = useState(false);
  const [staff, setStaff] = useState<IStaff[]>([]);

  useEffect(() => {
    const fetchAllStaff = async () => {
      const { data } = await fetchStaff();
      setStaff(data);
    };
    fetchAllStaff();
  }, []);
  const handleCreateNewProperty = () => {
    setIsShown(true);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;
  const totalPages = Math.ceil(staff.length / rowsPerPage);
  const paginatedData = staff.slice(
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
        <Pane
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom={16}
        >
          <Heading size={700}>Staff</Heading>
          <Button appearance="none" onClick={handleCreateNewProperty}>
            + New Staff
          </Button>
        </Pane>
      </Pane>
      <Pane padding={16}>
        <Table>
          <Table.Head>
            <Table.TextHeaderCell>Name</Table.TextHeaderCell>
            <Table.TextHeaderCell>Email</Table.TextHeaderCell>
            <Table.TextHeaderCell>Phone</Table.TextHeaderCell>
          </Table.Head>
          <Table.Body>
            {paginatedData.length > 0 &&
              paginatedData.map((staff) => (
                <Table.Row key={staff.id}>
                  <Table.TextCell>{`${staff.firstName} ${staff.lastName}`}</Table.TextCell>
                  <Table.TextCell>{staff.email}</Table.TextCell>
                  <Table.TextCell>{staff.phone}</Table.TextCell>
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
      <CreateStaff isShown={isShown} setIsShown={setIsShown} />
    </>
  );
};

export default Staff;
