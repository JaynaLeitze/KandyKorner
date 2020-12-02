import React, { useState, useEffect, useContext } from "react";
import { LocationContext } from "../locations/LocationProvider";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css";

export const EmployeeDetail = (props) => {
  const { locations, getLocations } = useContext(LocationContext);
  const { employees, getEmployees } = useContext(EmployeeContext);

  const [employee, setEmployee] = useState({});
  const [location, setLocation] = useState({});

  useEffect(() => {
    getEmployees().then(getLocations);
  }, []);

  useEffect(() => {
    const employee =
      employees.find((e) => e.id === parseInt(props.match.params.employeeId)) ||
      {};
    setEmployee(employee);
  }, [employees]);

  useEffect(() => {
    const location = locations.find((l) => l.id === employee.locationId) || {};
    setLocation(location);
  }, [locations]);

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <h4>{employee.manager === true ? "Associate" : "Manager"}</h4>
      <div>Currently working at {location.name}</div>
      <div>
        {employee.fullTime === true
          ? "Part Time Employee"
          : "Full Time Employee"}
      </div>
      <div>${employee.hourlyRate} an hour</div>
    </section>
  );
};
