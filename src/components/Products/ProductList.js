import React, { useState, useEffect } from "react";
import "./ProductList.css";
import ProductCard from "./ProductCard";
import FakeStoreApi from "../FakeStoreAPI/FakeStoreApi";
import axios from "axios";

const ProductSection = ({ searchFilter, filter }) => {
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const response = await FakeStoreApi.get(filter);
        // console.log(response.data);
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
  }, [filter]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (searchFilter) {
        const updatedProducts = products
          .map(({ id, image, title, price, rating }) => {
            return (
              <ProductCard
                key={id}
                image={image}
                title={title}
                price={price}
                rating={rating}
              />
            );
          })
          .filter((product) => {
            return product.props.title
              .toUpperCase()
              .includes(searchFilter.toUpperCase());
          });

        setShowProducts(updatedProducts);
      } else {
        const updatedProducts = products.map(
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

        setShowProducts(updatedProducts);
      }
    }, 500);

    return () => {
      clearTimeout(timerId);
    }
  }, [searchFilter, products]);

  return (
    <div className="product-list-wrapper">
      <h2 className="product-page-header">Inventory</h2>
      <div className="product-container">{showProducts}</div>
    </div>
  );
};

export default ProductSection;
