import React from "react";
import "./App.css";
import NavBar from "./components/UI/NavBar";
import ProductList from "./components/Products/ProductList";

const App = () => {
  return (
    <div className="container">
      <header>
        <div>
          <a className="header-name" href="#">
            Uncharted Ventures
          </a>
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search icon"></i>
          </div>
        </div>
        <NavBar />
      </header>
      <nav>Nav</nav>
      <main>
        {<ProductList />}
      </main>
      <footer>
        <div>©2021 Uncharted Ventures. All Rights Reserved.</div>
      </footer>
    </div>
  );
};

export default App;
