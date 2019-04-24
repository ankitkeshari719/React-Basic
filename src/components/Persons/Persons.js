import React from "react";
import "./Persons.css";

const Persons = props => {
  let persons = props.persons.map((person, index) => (
    <div className="person" key={person.id}>
      <h1 className="person_name">{person.name}</h1>
      <p>
        <span className="person_data">Age:</span> {person.age}
      </p>
      <p>
        <span className="person_data">Hobbies:</span> {person.hobbies}
      </p>
      <button
        type="button"
        onClick={() => props.viewPersonHandlerRef(person.id)}
      >
        View
      </button>
      <button type="button" onClick={() => props.deletePersonHandlerRef(index)}>
        Delete
      </button>
    </div>
  ));

  return persons;
};

export default Persons;
