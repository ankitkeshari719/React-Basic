import React from "react";
import "./Persons.css";

const Persons = props => {
  console.log("[Persons: render method called]");
  return (
    <div className="person">
      <h1 className="person_name">{props.person.name}</h1>
      <p>
        <span className="person_data">Age:</span> {props.person.age}
      </p>
      <p>
        <span className="person_data">Hobbies:</span> {props.children}
      </p>
      <button type="button" onClick={props.viewPersonHandlerRef}>
        View
      </button>
      <button type="button" onClick={props.deletePersonHandlerRef}>
        Delete
      </button>
    </div>
  );
};

export default Persons;
