import React from "react";
import { Link } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">WT</h1>
      <div className="navitems">
        <span className="navitem">
          <Link to="/">Home</Link>
        </span>
        <span className="navitem">
          <Link to="/about">About</Link>
        </span>
        <span className="navitem">
          <Link to="/contact">Contact</Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
