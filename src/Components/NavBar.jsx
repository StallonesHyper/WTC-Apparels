import React from "react";
import "./NavBar.css";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { BsFillBagFill } from "react-icons/bs";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <Link to="/" className="Links">
        <h2 className="Logo">WHITE TREE CLOTHING</h2>
      </Link>

      <ul className="CenterMenu">
        <Link to="/men" className="Links">
          <li>Mens</li>
        </Link>
        <Link to="/women" className="Links">
          <li>Womens</li>
        </Link>
        <Link to="/accessories" className="Links">
          <li>Accessories</li>
        </Link>
      </ul>
      <div className="RightMenu">
        <BiSearch className="Icons"></BiSearch>
        {/* NOTE: Authentication Link */}
        <Link to="/signin">
          <BsPerson className="Icons"></BsPerson>
        </Link>
        <BsFillBagFill className="Icons"></BsFillBagFill>
      </div>
    </div>
  );
}

export default NavBar;
