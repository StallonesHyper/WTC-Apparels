import React from "react";
import "./Card.css";
// import Rating from "./Rating";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to={`/product/${props.productid}`} className="LinkTag">
      <div className="Card">
        <div className="CardBorder">
          <img
            src={props.productImage}
            alt="ProductImage "
            className="productImage"
          />
          <h3>{props.productName}</h3>
          {/* NOTE: Pending Component */}
          {/* <Rating
          value={props.rating}
          numberOf={`${props.numReviews}`}
          color={"f8e825"}
        ></Rating> */}
          <p>{props.productPrice}</p>
          <button className="BuyButton">Buy Now</button>
        </div>
      </div>
    </Link>
  );
}

export default Card;

// NOTE: Implementation Of React Router
