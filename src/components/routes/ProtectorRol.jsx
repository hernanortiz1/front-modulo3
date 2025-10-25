import React from "react";
import { Navigate, Outlet } from "react-router";

const ProtectorRol = ({ rolesPermitidos = [], usuario }) => {
  //Si no hay sesión válida
  if (!usuario?.token) {
    return <Navigate to="/" replace />;
  }

  //Si el rol no está permitido
  if (!rolesPermitidos.includes(usuario.rol)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectorRol;
