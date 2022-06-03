import React from "react";
import "./NavBar.css";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { BsFillBagFill } from "react-icons/bs";
function NavBar() {
  return (
    <div className="NavBar">
      <h2 className="Logo">WHITE TREE CLOTHING</h2>
      <ul className="CenterMenu">
        <li>Mens</li>
        <li>Womens</li>
        <li>Accessories</li>
      </ul>
      <div className="RightMenu">
        <BiSearch className="Icons"></BiSearch>
        <BsPerson className="Icons"></BsPerson>
        <BsFillBagFill className="Icons"></BsFillBagFill>
      </div>
    </div>
  );
}

export default NavBar;
