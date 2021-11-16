import React from "react";
import "./App.css";
import NavBar from "./components/UI/NavBar";
import ProductSection from "./components/Products/ProductList";

const App = () => {
  return (
    <div className="container">
      <header>
        <div>
          <a className="header-name" href="#">
            Uncharted Ventures
          </a>
        </div>

        <NavBar />
      </header>
      <ProductSection />
      <main></main>
      <footer>
        <div>©2021 Uncharted Ventures. All Rights Reserved.</div>
      </footer>
    </div>
  );
};

export default App;
