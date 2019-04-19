import React from "react";
import "./Person.css";

const Person = props => {
  return (
    <div className="person">
      <h1 className="person_name">{props.name}</h1>
      <p>
        <span className="person_data">Age:</span> {props.age}
      </p>
      <p>
        <span className="person_data">Born:</span> {props.born}
      </p>
      <p>
        <span className="person_data">Birth Place:</span> {props.birthPlace}
      </p>
      <p>
        <span className="person_data">Hobbies:</span> {props.children}
      </p>
    </div>
  );
};

export default Person;
