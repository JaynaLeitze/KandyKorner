import React from "react";
import "./Product.css";

export const Product = ({ product, type }) => {
  <section className="products">
    <h2 className="product__name">{product.productName}</h2>
    <div className="product__type">{type.type}</div>
    <div className="product__price">${product.price}</div>
  </section>;
};
