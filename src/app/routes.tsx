'use client';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// Views
import Login from '@/views/Login';
import Register from '@/views/Register';
import ProtectedRoute, { ProtectedRouteProps } from './ProtectedRoute';

const Router: React.FC = () => {
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated: true, // Set this based on your authentication logic
    authenticationPath: '/login',
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Router;
