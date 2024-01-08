import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.registerSlice);
  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }
  return <>{children}</>;
};

export const UserRoute = ({ children }) => {
  const {
    login: { role },
    isAuthenticated,
  } = useSelector((state) => state.registerSlice);
  if (isAuthenticated && role === "user") {
    return <>{children}</>;
  }
  return <Navigate to="/" />;
};

export const FarmerRoute = ({ children }) => {
  const {
    login: { role },
    isAuthenticated,
  } = useSelector((state) => state.registerSlice);

  return <>{children}</>;
};

export const AdminRoute = ({ children }) => {
  const {
    login: { role },
    isAuthenticated,
  } = useSelector((state) => state.registerSlice);
  if (isAuthenticated && role === "admin") {
    return <>{children}</>;
  }
  return <Navigate to="/" />;
};
