import React from "react";
import "./viewPerson.css";

const ViewPerson = props => {
  return (
    <div className="viewPerson">
      <h1 className="person_name">{props.person.name}</h1>
      <p>
        <span className="person_data">Age:</span> {props.person.age}
      </p>
      <p>
        <span className="person_data">Born:</span> {props.person.born}
      </p>
      <p>
        <span className="person_data">Birth Place:</span>{" "}
        {props.person.birthPlace}
      </p>
      <p>
        <span className="person_data">Hobbies:</span> {props.person.children}
      </p>
      <p>
        <span className="person_data">Profile:</span> {props.person.profile}
      </p>
    </div>
  );
};

export default ViewPerson;
