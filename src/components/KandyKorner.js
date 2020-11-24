import React from "react";
// import { Route } from "react-router-dom";
// import { NavBar } from "./nav/NavBar";
// import { ApplicationViews } from "./ApplicationViews";
import "./KandyKorner.css";
import { LocationList } from "./locations/LocationList";
import { LocationProvider } from "./locations/LocationProvider";

export const KandyKorner = () => (
  <>
    <LocationProvider>
      <LocationList />
    </LocationProvider>
  </>
);
