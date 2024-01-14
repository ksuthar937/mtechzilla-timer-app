import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

import toast from "react-hot-toast";

const Secured = () => {
  const token = localStorage.getItem("tokenId");

  useEffect(() => {
    if (!token) {
      toast.error("Please login");
    }
  }, [token]);

  return token ? (
    <Outlet />
  ) : (
    <>
      <Navigate to="login" />
    </>
  );
};

export default Secured;
