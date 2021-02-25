import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./Product.css";
const Product = (props) => {
  const { name, img, price, seller, stock } = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <h4>{name}</h4>
        <br />
        <p>
          <small>by: {seller}</small>
        </p>
        <p>
          <strong>${price}</strong>
        </p>
        <p>only {stock} left in stock-order soon</p>
        <button
          className="shopping-cart-btn"
          onClick={() => props.cartBtnClick(props.product)}
        >
          {" "}
          <FontAwesomeIcon icon={faShoppingCart} /> add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
