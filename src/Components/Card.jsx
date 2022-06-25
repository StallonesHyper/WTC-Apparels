import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="Card">
      <div className="CardBorder">
        <img src={props.productImage} alt="Hoodies" className="productImage" />
        <h3>{props.productName}</h3>
        <p>{props.productPrice}</p>
        <button className="BuyButton">Buy Now</button>
      </div>
    </div>
  );
}

export default Card;

// NOTE: Implementation Of React Router
