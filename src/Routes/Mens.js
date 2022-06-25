import React from "react";
import Card from "../Components/Card";
import MensFirst from "../ASSETS/MensFirst.jpg";
import "./Page.Styles/Men.css";

function Mens() {
  return (
    <div className="Mens">
      <Card
        productImage={MensFirst}
        productName="Stripped Shirt"
        productPrice="2499/-"
      ></Card>

      <Card
        productImage={MensFirst}
        productName="Stripped Shirt"
        productPrice="2499/-"
      ></Card>

      <Card
        productImage={MensFirst}
        productName="Stripped Shirt"
        productPrice="2499/-"
      ></Card>

      <Card
        productImage={MensFirst}
        productName="Stripped Shirt"
        productPrice="2499/-"
      ></Card>
      <Card
        productImage={MensFirst}
        productName="Stripped Shirt"
        productPrice="2499/-"
      ></Card>
      <Card
        productImage={MensFirst}
        productName="Stripped Shirt"
        productPrice="2499/-"
      ></Card>
    </div>
  );
}

export default Mens;
