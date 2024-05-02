import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const { loading, user } = useSelector((state) => state.user);

  return (
    <Fragment>
      {loading === false && (
        user.role === "admin" ? <Outlet /> : <Navigate to="/login" />
      )}
    </Fragment>
  );
};

export default AdminRoute;