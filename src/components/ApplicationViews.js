import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./locations/LocationProvider";
import { LocationList } from "./locations/LocationList";
import { ProductProvider } from "./products/ProductProvider";
import { ProductList } from "./products/ProductList";
import { TypeProvider } from "./products/ProductTypesProvider";
import { EmployeeProvider } from "./employees/EmployeeProvider";
import { EmployeeList } from "./employees/EmployeeList";
import { EmployeeForm } from "./employees/EmployeeForm";
import { EmployeeDetail } from "./employees/EmployeeDetail";

export const ApplicationViews = (props) => {
  return (
    <>
      <EmployeeProvider>
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
              <Route
                exact
                path="/employees"
                render={(props) => <EmployeeList {...props} />}
              />
              <Route
                exact
                path="/employees/create"
                render={(props) => <EmployeeForm {...props} />}
              />
              <Route
                path="/employees/:employeeId(\d+)"
                render={(props) => <EmployeeDetail {...props} />}
              />
            </TypeProvider>
          </ProductProvider>
        </LocationProvider>
      </EmployeeProvider>
    </>
  );
};
