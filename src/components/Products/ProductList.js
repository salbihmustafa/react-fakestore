import React, { useState, useEffect } from "react";
import "./ProductList.css";
import ProductCard from "./ProductCard";
import FakeStoreApi from "../FakeStoreAPI/FakeStoreApi";

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await FakeStoreApi.get("/products");
        console.log(response.data)
        setProducts(response.data);
      }catch(err){
        console.log("error", err);
      }
    }
    fetchData();
  }, []);
  
  const displayProducts = products.map(({id, image}) => {
    return <ProductCard key={id} image={image}/>;
  });

  return (
    <div className="card-container">
      {displayProducts}
    </div>
  );
};

export default ProductSection;
