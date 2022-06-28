import React from "react";
import Card from "../Components/Card";
import MensFirst from "../ASSETS/MensFirst.jpg";
import MensSecond from "../ASSETS/MensSecond.jpg";
import MensThird from "../ASSETS/MensThird.jpg";
import MensFourth from "../ASSETS/MensFourth.jpg";
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
        productImage={MensSecond}
        productName="Stripped Shirt"
        productPrice="2499/-"
      ></Card>

      <Card
        productImage={MensThird}
        productName="Stripped Shirt"
        productPrice="2499/-"
      ></Card>

      <Card
        productImage={MensFourth}
        productName="Stripped Shirt"
        productPrice="2499/-"
      ></Card>
      <Card
        productImage={MensSecond}
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
