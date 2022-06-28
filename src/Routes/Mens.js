import React from "react";
import Card from "../Components/Card";
// NOTE: Dummpy Imports For Images
// import MensFirst from "../ASSETS/MensFirst.jpg";
// import MensSecond from "../ASSETS/MensSecond.jpg";
// import MensThird from "../ASSETS/MensThird.jpg";
// import MensFourth from "../ASSETS/MensFourth.jpg";
import "./Page.Styles/Men.css";
// NOTE: Import For Mapping Through Data
import { productsMen } from "../Data";

function Mens() {
  return (
    <div className="Mens">
      {productsMen.map((product) => (
        <Card
          productImage={product.image}
          // ERROR: Fix Props Intake Images
          productName={product.name}
          productPrice={product.price}
        ></Card>
      ))}

      {/* NOTE: Dummpy Components Rendered During Demonstration  */}

      {/* <Card
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
      ></Card> */}
    </div>
  );
}

export default Mens;
