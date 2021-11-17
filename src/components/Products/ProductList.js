import React, { useState, useEffect } from "react";
import "./ProductList.css";
import ProductCard from "./ProductCard";
import FakeStoreApi from "../FakeStoreAPI/FakeStoreApi";
import axios from "axios";

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const response = await FakeStoreApi.get("/products");
        console.log(response.data);
        setProducts(response.data);
      } catch (err) {
        console.log("error", err);
      }
    };
    fetchData();
    return () => {
      source.cancel(); //this will prevent memory leaking
      console.log("Clean up");
    };
  }, []);

  const displayProducts = products.map(
    ({ id, image, title, price, rating }) => {
      return (
        <ProductCard
          key={id}
          image={image}
          title={title}
          price={price}
          rating={rating}
        />
      );
    }
  );

  return (
    <div className="product-list-wrapper">
      <h1 className="product-header">Inventory</h1>
      <div className="product-container">{displayProducts}</div>
    </div>
  );
};

export default ProductSection;
