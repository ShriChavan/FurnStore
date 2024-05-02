import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);

  return (
    <Fragment>
      {loading === false && (
        isAuthenticated ? <Outlet /> : <Navigate to="/login" />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;