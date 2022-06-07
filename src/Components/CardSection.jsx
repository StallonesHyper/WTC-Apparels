import React from "react";
import Card from "./Card.jsx";
import White from "../ASSETS/White.jpeg";
import Pink from "../ASSETS/Pink.jpeg";
import Grey from "../ASSETS/Grey.jpeg";
import Blue from "../ASSETS/Blue.jpeg";

import Divider from "@mui/material/Divider";

import "./CardSection.css";
function CardSection() {
  return (
    <div className="CardSection">
      <Card
        productImage={White}
        productName="Relaxed White Hoodie"
        productPrice="1999/-"
      ></Card>
      <Card
        productImage={Pink}
        productName="Relaxed Pink Hoodie"
        productPrice="1999/-"
      ></Card>
      <Card
        productImage={Blue}
        productName="Relaxed Blue Hoodie"
        productPrice="1999/-"
      ></Card>
      <Card
        productImage={Grey}
        productName="Relaxed Grey Hoodie"
        productPrice="1999/-"
      ></Card>

      <Divider variant="middle" />
      {/* NOTE: Divider Not Rendering */}
    </div>
  );
}

export default CardSection;
