import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(user.role)) {
    if (user.role === 'admin') return <Navigate to="/admin/dashboard" />;
    if (user.role === 'staff') return <Navigate to="/staff/dashboard" />;
    return <Navigate to="/viewer/dashboard" />;
  }

  return children;
};

export default PrivateRoute;
