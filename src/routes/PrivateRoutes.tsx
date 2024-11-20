import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import Overview from "../pages/Dashboard/Overview/Overview";

const PrivateRoutes = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/dashboard" element={<Overview />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </DashboardLayout>
  );
};

export default PrivateRoutes;
