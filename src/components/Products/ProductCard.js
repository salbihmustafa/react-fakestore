import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  // return (
  //   <div className="product-card">
  //     Test
  //   </div>
  // );
  return (
    <div className="product-card">
      <div className="image-sec">
        {<img src={props.image} width={60} height={80} alt="test" />}
      </div>
      <div className="title-sec">
        <span>{props.title}</span>
      </div>
      <div className="price-sec">Price</div>
      <div className="btn-sec">
        <div>cart</div>
        <div>like</div>
      </div>
      {/*<div className="section2"><p>{props.title}</p></div>
      <div className="section3">${props.price}</div>
      <div className="section4">
        <div>{props.rating.rate}/5</div>
        <div><i className="material-icons">add_shopping_cart</i></div>
        <div><i className="material-icons">favorite_border</i></div>
  </div>*/}
    </div>
  );
};

export default ProductCard;
