import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fakeData from "./../../fakeData/index";
import Product from "./../Product/Product";

const ProductDetails = () => {
  const { productKey } = useParams();
  const product = fakeData.find((pd) => pd.key === productKey);
  console.log(product);
  return (
    <div>
      <h1>This is {product.name} Product Details Site................</h1>
      <Product showAddToCart={false} product={product}></Product>
    </div>
  );
};

export default ProductDetails;
