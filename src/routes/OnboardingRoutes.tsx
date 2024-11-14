import { Routes, Route } from "react-router-dom";
import { PlanSelectionStep } from "../pages/Onboarding/PlanSelection/PlanSelection";
import OnboardingLayout from "../OnboardingLayout/OnboardingLayout";
import { PersonalInfo } from "../pages/Onboarding/PeronsalInfo";
import { CreatePassword } from "../pages/Onboarding/CreatePassword";
import { Summary } from "../pages/Onboarding/Summary/Summary";

const OnboardingRoutes = () => {
  return (
    <OnboardingLayout>
      <Routes>
        <Route path="/plans" element={<PlanSelectionStep />} />
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/create-password" element={<CreatePassword />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </OnboardingLayout>
  );
};

export default OnboardingRoutes;
