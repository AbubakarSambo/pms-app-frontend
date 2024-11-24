import React from "react";
import { Table, Pane, Badge } from "evergreen-ui";

const HotelRoomAvailability = () => {
  // Mock data for room availability
  const data = [
    {
      date: "01/12/2024",
      rooms: {
        Ruby: "Victory Obot",
        Jade: "Vacant",
        Amber: "Ejiro Okene",
        Sky: "Vacant",
      },
    },
    {
      date: "02/12/2024",
      rooms: {
        Ruby: "Victory Obot",
        Jade: "Vacant",
        Amber: "Ejiro Okene",
        Sky: "Vacant",
      },
    },
    // Add more data here...
  ];

  const roomNames = ["Ruby", "Jade", "Amber", "Sky"]; // Add all room names here

  return (
    <Pane padding={16}>
      <Table>
        {/* Header */}
        <Table.Head>
          <Table.TextHeaderCell width={150}>Date</Table.TextHeaderCell>
          {roomNames.map((room) => (
            <Table.TextHeaderCell key={room} flexBasis={200}>
              {room}
            </Table.TextHeaderCell>
          ))}
        </Table.Head>

        {/* Body */}
        <Table.Body>
          {data.map((row: { date: string; rooms: Record<string, string> }) => (
            <Table.Row key={row.date}>
              <Table.TextCell width={150}>{row.date}</Table.TextCell>
              {roomNames.map((room) => (
                <Table.TextCell key={room} flexBasis={200}>
                  {row.rooms[room] === "Vacant" ? (
                    <Badge color="red">Vacant</Badge>
                  ) : (
                    <Badge color="green">{row.rooms[room]}</Badge>
                  )}
                </Table.TextCell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Pane>
  );
};

export default HotelRoomAvailability;
