import "./App.css";
import React, { useState } from "react";
import Search from "./components/SearchBar/Search";
import NavBar from "./components/UI/NavBar";
import ProductList from "./components/Products/ProductList";

const App = () => {
  const [searchTerm, setSearchTerm] = useState(""); //set state from search and move to product list as filter
  const [filter, setFilter] = useState("/products");

  return (
    <div className="container">
      <header>
        <div className="left-head">
          <a className="header-name" href="#">
            Uncharted Ventures
          </a>
        </div>
        <NavBar />
      </header>
      <nav>
        <div className="nav-search-bar">
          <Search onSearchSubmit={setSearchTerm} />
        </div>
        <div className="nav-category">
          <button onClick={() => setFilter("/products")}>All Products</button>
        </div>
      </nav>
      <main>{<ProductList searchFilter={searchTerm} filter={filter} />}</main>
      <footer>
        <div>©2021 Uncharted Ventures. All Rights Reserved.</div>
      </footer>
    </div>
  );
};

export default App;
