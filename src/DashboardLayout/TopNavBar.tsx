import { Pane, Heading, Avatar, SelectMenu, Button } from "evergreen-ui";

const TopNavbar = () => {
  return (
    <Pane
      height={64}
      background="white"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      paddingX={16}
      borderBottom="muted"
    >
      <Heading size={600}>Welcome</Heading>
      <Pane display="flex" alignItems="center">
        <SelectMenu
          title="Select Property"
          options={[
            { label: "Property 1", value: "property1" },
            { label: "Property 2", value: "property2" },
          ]}
          selected="property1"
        >
          <Button>Yellow Door (Property 1)</Button>
        </SelectMenu>
        <Avatar name="Sophia Williams" marginLeft={16} />
      </Pane>
    </Pane>
  );
};

export default TopNavbar;
