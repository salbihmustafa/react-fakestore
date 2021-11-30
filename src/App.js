import "./App.css";
import React from "react";
import Search from "./components/SearchBar/Search";
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
          <Search />
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
