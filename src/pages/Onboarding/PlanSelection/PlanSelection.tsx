import React from "react";
import {
  Card,
  Heading,
  Button,
  Pane,
  Small,
  defaultTheme,
  Paragraph,
  Strong,
  Icon,
  SnowflakeIcon,
} from "evergreen-ui";
import "./styles.css";
interface PlanCardProps {
  title: string;
  price: string;
  description: string;
  duration: string;
}
const PlanCard = ({ title, price, description, duration }: PlanCardProps) => (
  <Card border="default" width={350} borderRadius={12}>
    <Pane backgroundColor={defaultTheme.colors.gray400} padding={10}>
      <Heading size={600}>{title}</Heading>
    </Pane>

    <Pane padding={10}>
      <Paragraph size={500}>
        <Strong size="large">{price}</Strong>/<Small>{duration}</Small>
      </Paragraph>
      <Button width="100%" marginBottom={12} appearance="none" marginTop={8}>
        Get started
      </Button>
      <Small color="muted" display="flex" alignItems="center">
        <Icon
          icon={SnowflakeIcon}
          color={defaultTheme.colors.blue400}
          marginRight={8}
        />
        {description}
      </Small>
    </Pane>
  </Card>
);

export const PlanSelectionStep = () => {
  return (
    <Pane display="flex" flexDirection="column" marginTop={100}>
      <Pane
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginBottom={30}
      >
        <Heading size={600}>JOIN THE COMMUNITY</Heading>
        <Heading size={200}>Choose a plan that fits you to get started</Heading>
      </Pane>
      <Pane
        display="flex"
        gap={12}
        className="container"
        justifyContent="center"
      >
        <PlanCard
          title="Basic"
          price="₦120,000"
          duration="month"
          description="Only 1 property listing"
        />
        <PlanCard
          title="Standard"
          price="₦250,000"
          duration="month"
          description="3 property listings"
        />
        <PlanCard
          title="Pro"
          price="₦500,000"
          duration="month"
          description="10 property listings"
        />
      </Pane>
    </Pane>
  );
};
