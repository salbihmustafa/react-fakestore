import React from "react";
import "./App.css";
import NavBar from "./components/UI/NavBar";
import ProductSection from "./components/Products/ProductList";

const App = () => {
  return (
    <div className="container">
      <header>
        <div className="header-name">Header</div>
        <div>Height: 100px, Width: 100%</div>
        <NavBar />
      </header>
      <ProductSection />
      <main></main>
      <footer>
        <div className="footer-name">Footer</div>
        <div>Height: 100px, Width: 100%</div>
      </footer>
    </div>
  );
};

export default App;
