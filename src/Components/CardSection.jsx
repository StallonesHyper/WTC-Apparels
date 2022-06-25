import React from "react";
import Card from "./Card.jsx";
import White from "../ASSETS/White.jpeg";
import Pink from "../ASSETS/Pink.jpeg";
import Grey from "../ASSETS/Grey.jpeg";
import Blue from "../ASSETS/Blue.jpeg";
import MensFirst from "../ASSETS/MensFirst.jpg";
import MensSecond from "../ASSETS/MensSecond.jpg";
import MensThird from "../ASSETS/MensThird.jpg";
import MensFourth from "../ASSETS/MensFourth.jpg";
import LadiesFirst from "../ASSETS/LadiesFirst.jpg";
import LadiesSecond from "../ASSETS/LadiesSecond.jpg";
import LadiesThird from "../ASSETS/LadiesThird.jpg";
import LadiesFourth from "../ASSETS/LadiesFourth.jpg";
import { Link } from "react-router-dom";

import "./CardSection.css";
function CardSection() {
  return (
    <>
      <h2 className="SectionHeading">Featured Products:</h2>
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
        {/* NOTE: Divider Not Rendering */}
      </div>
      <div className="EndButton">
        <Link to="/shop" className="Link">
          <button className="SeeMore">See More</button>
        </Link>
      </div>

      <h2 className="SectionHeading">Men's Collection:</h2>
      <div className="CardSection">
        <Card
          productImage={MensFirst}
          productName="Floral Beach Shirt"
          productPrice="1999/-"
        ></Card>
        <Card
          productImage={MensSecond}
          productName="Floral Beach Shirt"
          productPrice="1999/-"
        ></Card>
        <Card
          productImage={MensThird}
          productName="Floral Beach Shirt"
          productPrice="1999/-"
        ></Card>
        <Card
          productImage={MensFourth}
          productName="Floral Beach Shirt"
          productPrice="1999/-"
        ></Card>
      </div>

      <div className="EndButton">
        <Link to="/men" className="Link">
          <button className="SeeMore">See More</button>
        </Link>
      </div>

      <h2 className="SectionHeading">Women's Collection:</h2>
      <div className="CardSection">
        <Card
          productImage={LadiesFirst}
          productName="V-Neck Dress"
          productPrice="1999/-"
        ></Card>
        <Card
          productImage={LadiesSecond}
          productName="V-Neck Dress"
          productPrice="1999/-"
        ></Card>
        <Card
          productImage={LadiesThird}
          productName="V-Neck Jumpsuit"
          productPrice="1999/-"
        ></Card>
        <Card
          productImage={LadiesFourth}
          productName="V-Neck Dress"
          productPrice="1999/-"
        ></Card>
      </div>

      <div className="EndButton">
        <Link to="/women" className="Link">
          <button className="SeeMore">See More</button>
        </Link>
      </div>
    </>
  );
}

export default CardSection;
