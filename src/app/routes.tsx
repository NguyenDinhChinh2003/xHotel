'use client';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// Views
import Login from './auth/login/page'
import Register from './auth/register/page'
import RegisterOpt from './auth/register/otp/page'

const Router: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/login" />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/register/otp" element={<RegisterOpt />} />
    </Routes>
  );
};

export default Router;
