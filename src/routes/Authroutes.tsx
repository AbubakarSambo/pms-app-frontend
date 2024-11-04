// src/routes/AuthRoutes.tsx

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "../AuthLayout/AuthLayout";
import Login from "../pages/Auth/Login";
// import Signup from "../pages/Auth/Signup";
import ResetPassword from "../pages/Auth/ResetPassword";
import Verification from "../pages/Auth/Verification";
import CreatePassword from "../pages/Auth/CreatePassword";

const AuthRoutes = () => {
  return (
    <AuthLayout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/create-password" element={<CreatePassword />} />
      </Routes>
    </AuthLayout>
  );
};

export default AuthRoutes;
