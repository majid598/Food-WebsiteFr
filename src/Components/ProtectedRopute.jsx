import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRopute = ({
  isAuthenticated,
  children,
  admin,
  adminOnly,
  redirect = "/",
}) => {
  if (!isAuthenticated) return <Navigate to={redirect} />;
  if (adminOnly && !admin) return <Navigate to={redirect} />;
  return children ? children : <Outlet />;
};

export default ProtectedRopute;
