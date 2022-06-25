import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function Navigation() {
  return (
    <div className="Navigation">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
}

export default Navigation;
