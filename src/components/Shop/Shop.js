import React, { useState } from "react";
import fakeData from "../../fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const first10 = fakeData.slice(0, 20);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  const buttonClick = (props) => {
    const newCart = [...cart, props];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product cartBtnClick={buttonClick} product={product}></Product>
        ))}
      </div>
      <div className="card-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
