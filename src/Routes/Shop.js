import React from "react";
import Card from "../Components/Card";
import White from "../ASSETS/White.jpeg";
import Pink from "../ASSETS/Pink.jpeg";
import Grey from "../ASSETS/Grey.jpeg";
import Blue from "../ASSETS/Blue.jpeg";

import "./Page.Styles/Shop.css";

function Shop() {
  return (
    <div className="Shop">
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
    </div>
  );
}

export default Shop;
