import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

// ProtectedRoute checks if the user is authenticated
const ProtectedRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();

  // If user is not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the requested component
  return <Route {...rest} element={element} />;
};

export default ProtectedRoute;
