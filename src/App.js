import React, { Component } from "react";
import "./App.css";
import Persons from "./components/Persons/Persons";
import ViewPerson from "./components/Persons/ViewPerson/viewPerson";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          id: 1,
          name: "John",
          age: 20,
          born: "Feb 07, 1999",
          birthPlace: "Pretoria, Transvaal",
          hobbies: "Cycling",
          profile:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          isViewPerson: false
        },
        {
          id: 2,
          name: "Max",
          age: 18,
          born: "March 17, 2001",
          birthPlace: "Gauteng, Transvaal",
          hobbies: "Cooking",
          profile:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          isViewPerson: false
        },
        {
          id: 3,
          name: "John",
          age: 24,
          born: "Nov 07, 1995",
          birthPlace: "Johannesburg",
          hobbies: "Dancing",
          profile:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          isViewPerson: false
        },
        {
          id: 4,
          name: "Reeza",
          age: 29,
          born: "Aug 14, 1989",
          birthPlace: "Kimberley, Capetown",
          hobbies: "Jogging",
          profile:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          isViewPerson: false
        }
      ]
    };
  }

  viewPersonHandler = personId => {
    let updatePerson = [...this.state.persons].map(person => {
      if (person.id === personId) {
        person.isViewPerson = true;
      } else {
        person.isViewPerson = false;
      }
      return person;
    });
    this.setState({ persons: updatePerson });
  };

  render() {
    let personsDoc = null;
    if (this.state.persons) {
      personsDoc = this.state.persons.map(person => (
        <Persons
          key={person.id}
          person={person}
          viewPersonHandlerRef={this.viewPersonHandler}
        >
          {person.hobbies}
        </Persons>
      ));
    } else {
      personsDoc = <p>Loading...</p>;
    }

    let personDoc = null;
    if (this.state.persons) {
      personDoc = this.state.persons.map(person => {
        if (person.isViewPerson) {
          return (
            <ViewPerson key={person.id} person={person}>
              {person.hobbies}
            </ViewPerson>
          );
        }
      });
    }

    return (
      <div>
        {personsDoc}
        {personDoc}
      </div>
    );
  }
}

export default App;
