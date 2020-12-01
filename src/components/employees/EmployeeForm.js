import React, { useContext, useRef, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "./locations/LocationProvider";

export const EmployeeForm = (props) => {
  const { addEmployee } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext);

  //create references that can be attached to input fields in form

  const name = useRef(null);
  const location = useRef(null);
  const manager = useRef(null);
  const fullTime = useRef(null);
  const hourlyRate = useRef(null);

  useEffect(() => {
    getLocations();
  }, []);

  const constructNewEmployee = () => {
    const locationId = parseInt(location.current.value);

    addEmployee({
      name: name.current.value,
      locationId,
      manager: manager.current.value,
      fullTime: fullTime.current.value,
      hourlyRate: hourlyRate.current.value,
    }).then(() => props.history.push("/employees"));
  };

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="employeeName">Employee name: </label>
          <input
            type="text"
            id="employeeName"
            ref={name}
            required
            autoFocus
            className="form-control"
            placeholder="Employee name"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select
            defaultValue=""
            name="location"
            ref={location}
            id="employeeLocation"
            className="form-control"
          >
            <option value="0">Select a location</option>
            {locations.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
    </form>
  );
};
