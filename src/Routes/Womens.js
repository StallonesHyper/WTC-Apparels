import React from "react";
import Card from "../Components/Card";
// import LadiesFirst from "../ASSETS/LadiesFirst.jpg";
// import LadiesSecond from "../ASSETS/LadiesSecond.jpg";
// import LadiesThird from "../ASSETS/LadiesThird.jpg";
// import LadiesFourth from "../ASSETS/LadiesFourth.jpg";
import { productsWomen } from "../Data";

import "./Page.Styles/Women.css";

function Womens() {
  return (
    <div className="Womens">
      {productsWomen.map((product) => (
        <Card
          productImage={product.image}
          // ERROR: Fix Props Intake Images
          productName={product.name}
          productPrice={product.price}
        ></Card>
      ))}
      {/* <Card
        productImage={LadiesFirst}
        productName="Stripped Shirt"
        productPrice="2499/-"
      ></Card>

      <Card
        productImage={LadiesSecond}
        productName="Stripped Shirt"
        productPrice="2499/-"
      ></Card>

      <Card
        productImage={LadiesThird}
        productName="Stripped Shirt"
        productPrice="2499/-"
      ></Card>

      <Card
        productImage={LadiesFourth}
        productName="Stripped Shirt"
        productPrice="2499/-"
      ></Card>
      <Card
        productImage={LadiesThird}
        productName="Stripped Shirt"
        productPrice="2499/-"
      ></Card>
      <Card
        productImage={LadiesFirst}
        productName="Stripped Shirt"
        productPrice="2499/-"
      ></Card> */}
    </div>
  );
}

export default Womens;
