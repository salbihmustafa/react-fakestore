import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="menu-btns">
        <div><a href="#">Home</a></div>
        <div><a href="#">About</a></div>
        <div><a href="#"><i className="material-icons">shopping_cart</i></a></div>
      </div>
    </div>
  );
};

export default NavBar;
