"use client";
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Views
import Login from "./auth/login/page";
import LoginByPhone from "./auth/login/phone/page";
import Register from "./auth/register/page";
import RegisterOpt from "./auth/register/otp/page";
import NewPassword from "./auth/register/newPass/page";
import Gender from "./auth/register/gender/page";
import ForgotEmail from "./auth/forgot/page";
import ForgotPassword from "./auth/forgot/password/page";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/login" />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/login/phone" element={<LoginByPhone />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/register/otp" element={<RegisterOpt />} />
      <Route path="/auth/register/new-pass" element={<NewPassword />} />
      <Route path="/auth/register/gender" element={<Gender />} />
      <Route path="/auth/forgot" element={<ForgotEmail />} />
      <Route path="/auth/forgot/password" element={<ForgotPassword />} />
    </Routes>
  );
};

export default Router;
