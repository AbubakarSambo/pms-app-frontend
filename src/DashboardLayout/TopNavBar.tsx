import { Pane, Heading, Avatar, SelectMenu, Button } from "evergreen-ui";

const TopNavbar = ({ properties, activeProperty, setActiveProperty }: any) => {
  const handleSetActiveProperties = (e: any) => {
    // check the properties Array for the selected property using the value to match the id in that array
    const selectedProperty = properties.find(
      (property: any) => property.id === e.value
    );

    setActiveProperty(selectedProperty);
  };

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
          options={properties.map((property: any) => ({
            label: property.name,
            value: property.id,
          }))}
          selected={activeProperty?.value}
          onSelect={handleSetActiveProperties}
          hasFilter={false}
        >
          <Button>{activeProperty?.name}</Button>
        </SelectMenu>
        <Avatar name="Sophia Williams" marginLeft={16} />
      </Pane>
    </Pane>
  );
};

export default TopNavbar;
