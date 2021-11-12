import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-wrapper">
      <div class="ui secondary  menu">
        <a className="item active" href="#">
          Home
        </a>
        <a className="item" href="#">
          About
        </a>
        <a className="item" href="#">
          List
        </a>
        <div className="right menu">
          <div className="item">
            <div class="ui icon input">
              <input type="text" placeholder="Search..." />
              <i class="search link icon"></i>
            </div>
          </div>
          <a class="ui item">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
