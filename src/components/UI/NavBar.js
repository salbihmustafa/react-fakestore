import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="ui icon input">
        <input type="text" placeholder="Search..." />
        <i className="search icon"></i>
      </div>
      <div className="menu-btns">
        <div><a href="#">User</a></div>
        <div><a href="#">Link</a></div>
        <div><a href="#"><i className="material-icons">shopping_cart</i></a></div>
      </div>
    </div>
  );
};

export default NavBar;
