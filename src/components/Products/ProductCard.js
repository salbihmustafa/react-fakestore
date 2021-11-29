import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  const formatter = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD'
  });
  const price = formatter.format(props.price)
  return (
    <div className="product-card">
      <div className="image-sec">
        {<img src={props.image} width={60} height={80} alt="test" />}
      </div>
      <div className="title-sec">
        <span>{props.title}</span>
      </div>
      <div className="price-sec">{price}</div>
      <div className="btn-sec">
        <div><i className="material-icons">add_shopping_cart</i></div>
        <div><i className="material-icons">favorite_border</i></div>
      </div>
    </div>
  );
};

export default ProductCard;
