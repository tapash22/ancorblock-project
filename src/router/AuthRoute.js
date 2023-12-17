// AuthRoute.js
import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const AuthRoute = ({ element, isAuthenticated, ...rest }) => {
  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default AuthRoute;
