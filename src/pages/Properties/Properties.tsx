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
import { CreateProperty } from "./CreatePropertyModal";
import { fetchProperties } from "../../utils/service";
import { useAuthContext } from "../../hooks/useAuthContext";

interface IProperty {
  name: string;
  address: string;
  id: string;
}
const Properties = () => {
  const [isShown, setIsShown] = useState(false);
  const { authData } = useAuthContext();
  const [properties, setProperties] = useState<IProperty[]>([]);

  useEffect(() => {
    const fetchAllProperties = async (orgId: string) => {
      const { data } = await fetchProperties(orgId);
      setProperties(data);
    };
    authData?.orgId && fetchAllProperties(authData.orgId);
  }, []);
  const handleCreateNewProperty = () => {
    setIsShown(true);
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;
  const totalPages = Math.ceil(properties.length / rowsPerPage);
  const paginatedData = properties.slice(
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
            + New Property
          </Button>
        </Pane>
      </Pane>
      <Pane padding={16}>
        <Table>
          <Table.Head>
            <Table.TextHeaderCell>Name</Table.TextHeaderCell>
            <Table.TextHeaderCell>Address</Table.TextHeaderCell>
          </Table.Head>
          <Table.Body>
            {paginatedData.length > 0 &&
              paginatedData.map((property) => (
                <Table.Row key={property.id}>
                  <Table.TextCell>{property.name}</Table.TextCell>
                  <Table.TextCell>{property.address}</Table.TextCell>
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
      <CreateProperty isShown={isShown} setIsShown={setIsShown} />
    </>
  );
};

export default Properties;
