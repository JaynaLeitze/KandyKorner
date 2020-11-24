import React from "react";
import "./Location.css";

export const Location = ({ location }) => (
  <section className="location">
    <h3 className="location__name">{location.name}</h3>
    <address className="location__address">{location.address}</address>
    <div className="location__size">Square Footage: {location.size}</div>
    <div className="location__accessible">
      Handicap Accessible: {location.accessible}
    </div>
  </section>
);
