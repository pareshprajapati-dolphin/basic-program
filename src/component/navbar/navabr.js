import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/createitem">Create Item</Link>
        </li>
        <li>
          <Link to="/createcustomer">Create Customer</Link>
        </li>
        <li>
          <Link to="/createreplacementpartner">Create Replacement Partner</Link>
        </li>
        <li>
          <Link to="/inwardstage1">stage1</Link>
        </li>
        <li>
          <Link to="#" className="dropbtn">
            Dropdown
          </Link>
          <ul>
            <li>
              <Link to="#">Link 1</Link>
            </li>
            <li>
              <Link to="#">Link 2</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
