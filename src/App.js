import React from "react";
import "./App.css";
import NavBar from "./components/UI/NavBar";

const App = () => {
  return (
    <div className="container">
      <header>
        <div class="header-name">Header</div>
        <div>Height: 100px, Width: 100%</div>
        <NavBar />
      </header>
      <section></section>
      <main></main>
      <footer>
        <div class="footer-name">Footer</div>
        <div>Height: 100px, Width: 100%</div>
      </footer>
    </div>
  );
};

export default App;
