'use client';
import React, { ElementType } from 'react';
import { RouteProps, Navigate } from 'react-router-dom';

export interface ProtectedRouteProps {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: ElementType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated, authenticationPath, outlet: Outlet, ...routeProps }) => {
  if (!isAuthenticated) {
    return <Navigate to={authenticationPath} />;
  }
  return <Outlet {...routeProps} />;
};

export default ProtectedRoute;
