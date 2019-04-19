import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person/Person";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          name: "John",
          age: 20,
          born: "Feb 07, 1999",
          birthPlace: "Pretoria, Transvaal",
          hobbies: "Cycling"
        },
        {
          name: "Max",
          age: 18,
          born: "March 17, 2001",
          birthPlace: "Gauteng, Transvaal",
          hobbies: "Cooking"
        },
        {
          name: "John",
          age: 24,
          born: "Nov 07, 1995",
          birthPlace: "Johannesburg",
          hobbies: "Dancing"
        },
        {
          name: "Reeza",
          age: 29,
          born: "Aug 14, 1989",
          birthPlace: "Kimberley, Capetown",
          hobbies: "Jogging"
        }
      ]
    };
  }

  render() {
    let personDoc = null;
    if (this.state.persons) {
      personDoc = this.state.persons.map(person => (
        <Person
          name={person.name}
          age={person.age}
          born={person.born}
          birthPlace={person.birthPlace}
        >
          {person.hobbies}
        </Person>
      ));
    }

    return <div>{personDoc}</div>;
  }
}

export default App;
