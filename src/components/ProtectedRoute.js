import React from "react";
import { Navigate } from "react-router-dom";
import { UseUserauth } from "./context/UserAuthContext";
const ProtectedRoute = ({ children }) => {
  let { user } = UseUserauth();
  if (!user) {
    return <Navigate to="/" />;
    // return <Navigate to="/home" />;
  }
  return children;
};

export default ProtectedRoute;
