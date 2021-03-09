import React, { useState, useEffect } from "react";
import fakeData from "../../fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { Link } from "react-router-dom";
import "./Shop.css";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
const Shop = () => {
  const first10 = fakeData.slice(0, 20);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKey = Object.keys(saveCart);
    const previewsCart = productKey.map((pdkey) => {
      const product = fakeData.find((pd) => pd.key === pdkey);
      product.quantity = saveCart[pdkey];
      return product;
    });
    setCart(previewsCart);
  }, []);

  const buttonClick = (props) => {
    const sameProduct = cart.find((pd) => pd.key === props.key);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== props.key);
      newCart = [...others, sameProduct];
    } else {
      props.quantity = 1;
      newCart = [...cart, props];
    }
    setCart(newCart);

    addToDatabaseCart(props.key, count);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.key}
            showAddToCart={true}
            cartBtnClick={buttonClick}
            product={product}
          ></Product>
        ))}
      </div>
      <div className="card-container">
        <Cart cart={cart}>
          <Link to="/review">
            <button className="shopping-cart-btn">Review</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
