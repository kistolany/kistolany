import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
function LayoutDashboardLogin() {
  return (
    <div>
      <div></div>
      <Outlet />
    </div>
  );
}

export default LayoutDashboardLogin;
