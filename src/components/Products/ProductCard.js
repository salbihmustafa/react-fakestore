import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className="card-wrapper">
      <div className="image-section">
        {<img src={props.image} width={100} height={100} />}
      </div>
      <div className="section2">Test2</div>
      <div className="section3">Test3</div>
    </div>
  );
};

export default ProductCard;
