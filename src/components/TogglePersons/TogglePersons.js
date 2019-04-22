import React from "react";
import "./TogglePersons.css";

const TogglePersons = props => {
  return (
    <div className="togglePerson">
      <button type="button" onClick={props.togglePersonsListHandlerRef}>
        Toggle Persons
      </button>
    </div>
  );
};

export default TogglePersons;
