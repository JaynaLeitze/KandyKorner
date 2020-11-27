import React, { useContext, useEffect } from "react";
import { ProductContext } from "./ProductProvider";
import { Product } from "./Product";
import "./Product.css";
import { TypeContext } from "./ProductTypesProvider";

export const ProductList = () => {
  // This state changes when `getProducts()` is invoked below
  const { products, getProducts } = useContext(ProductContext);
  const { types, getTypes } = useContext(TypeContext);

  /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
  useEffect(() => {
    console.log("ProductList: Initial render before data");
    getTypes().then(getProducts);
  }, []);

  return (
    <div className="products">
      {products.map((prod) => {
        const productType = types.find((t) => t.id === prod.productTypeId);

        return <Product key={prod.id} product={prod} type={productType} />;
      })}
    </div>
  );
};
