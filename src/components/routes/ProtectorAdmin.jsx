import { Navigate, Outlet } from "react-router";
import React from 'react';

const ProtectorAdmin = ({ isAdmin }) => {
  if (!isAdmin.token) {
    return <Navigate to={"/"}></Navigate>;
  }

  return <Outlet />;
};

export default ProtectorAdmin;
