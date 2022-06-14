import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import CardSection from "./CardSection";

function Root() {
  return (
    <div className="Root">
      <NavBar></NavBar>
      <Home></Home>
      <CardSection></CardSection>
    </div>
  );
}

export default Root;

// NOTE: Implement React Router
