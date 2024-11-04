// src/routes/PrivateRoutes.tsx

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
// import Overview from "../pages/Dashboard/Overview";
// import Reservations from "../pages/Dashboard/Reservations";
// import Occupancy from "../pages/Dashboard/Occupancy";

const PrivateRoutes = () => {
  return (
    <DashboardLayout>
      <Routes>
        {/* <Route path="/dashboard" element={<Overview />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/occupancy" element={<Occupancy />} /> */}
        {/* Redirect any unmatched routes to dashboard */}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </DashboardLayout>
  );
};

export default PrivateRoutes;
