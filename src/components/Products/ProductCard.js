import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className="card">
      <div className="image-section">
        {<img src={props.image} width={100} height={135} alt="test" />}
      </div>
      <div className="section2"><p>{props.title}</p></div>
      <div className="section3">${props.price}</div>
      <div className="section4">
        <div>{props.rating.rate}/5</div>
        <div><i className="material-icons">add_shopping_cart</i></div>
        <div><i className="material-icons">favorite_border</i></div>
      </div>
    </div>
  );
};

export default ProductCard;
