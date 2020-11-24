import React from "react";
// import { Route } from "react-router-dom";
// import { NavBar } from "./nav/NavBar";
// import { ApplicationViews } from "./ApplicationViews";
import "./KandyKorner.css";
import { LocationList } from "./locations/LocationList";
import { LocationProvider } from "./locations/LocationProvider";
import { ProductProvider } from "./products/ProductProvider";
import { ProductList } from "./products/ProductList";

export const KandyKorner = () => (
  <>
    <LocationProvider>
      <LocationList />
    </LocationProvider>

    <ProductProvider>
      <ProductList />
    </ProductProvider>
  </>
);
