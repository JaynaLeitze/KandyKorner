import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./locations/LocationProvider";
import { LocationList } from "./locations/LocationList";
import { ProductProvider } from "./products/ProductProvider";
import { ProductList } from "./products/ProductList";
import { TypeProvider } from "./products/ProductTypesProvider";

export const ApplicationViews = (props) => {
  return (
    <>
      <LocationProvider>
        <ProductProvider>
          <TypeProvider>
            <Route
              exact
              path="/locations"
              render={(props) => <LocationList {...props} />}
            />
            <Route
              exact
              path="/products"
              render={(props) => <ProductList {...props} />}
            />
          </TypeProvider>
        </ProductProvider>
      </LocationProvider>
    </>
  );
};
