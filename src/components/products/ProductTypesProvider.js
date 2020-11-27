import React, { useState, useEffect } from "react";

export const TypeContext = React.createContext();

export const TypeProvider = (props) => {
  const [types, setTypes] = useState([]);

  const getTypes = () => {
    return fetch("http://localhost:8088/productTypes")
      .then((res) => res.json())
      .then(setTypes);
  };

  const addTypes = (types) => {
    return fetch("http://localhost:8088/productTypes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(types),
    }).then(getTypes);
  };
  return (
    <TypeContext.Provider
      value={{
        types,
        addTypes,
        getTypes,
      }}
    >
      {props.children}
    </TypeContext.Provider>
  );
};
