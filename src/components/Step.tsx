import { Pane, Text, Badge } from "evergreen-ui";

const Step = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    { id: 1, label: "Select room" },
    { id: 2, label: "Reservation details" },
    { id: 3, label: "Guest details" },
  ];

  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      paddingY={16}
    >
      {steps.map((step, index) => (
        <Pane key={step.id} display="flex" alignItems="center">
          {/* Step Number */}
          <Badge
            color={currentStep === step.id ? "blue" : "neutral"}
            marginRight={8}
            size={16}
          >
            {step.id}
          </Badge>

          {/* Step Label */}
          <Text
            size={300}
            color={currentStep === step.id ? "default" : "muted"}
            fontWeight={currentStep === step.id ? 600 : 400}
          >
            {step.label}
          </Text>

          {/* Arrow Separator */}
          {index < steps.length - 1 && (
            <Text marginX={8} size={300} color="muted">
              →
            </Text>
          )}
        </Pane>
      ))}
    </Pane>
  );
};

export default Step;
