import React from "react";
import { Navigate, Outlet } from "react-router";

const ProtectorRol = ({
  rolesPermitidos = [],
  bloquearRoles = [],
  usuario,
}) => {
  if (!usuario) {
    return <Navigate to="/login" />;
  }

  const rolUsuario = usuario.rol;

  if (bloquearRoles.length > 0) {
    return bloquearRoles.includes(rolUsuario) ? (
      <Navigate to="/" />
    ) : (
      <Outlet />
    );
  }

  return rolesPermitidos.includes(rolUsuario) ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default ProtectorRol;
