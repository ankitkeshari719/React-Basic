import React, { Component } from "react";
import Persons from "../../components/Persons/Persons";
import ViewPerson from "../../components/Persons/ViewPerson/viewPerson";
import TogglePersons from "../../components/TogglePersons/TogglePersons";

class Main extends Component {
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
      ],
      togglePersons: true
    };
  }

  // Function to handle the show/hide of persons list
  togglePersonsListHandler = () => {
    this.setState({
      togglePersons: !this.state.togglePersons
    });
  };

  // Function to handle the show/hide of person
  viewPersonHandler = personId => {
    let updatePerson = this.state.persons.map(person => {
      person.isViewPerson = person.id === personId || false;
      return person;
    });
    this.setState({ persons: updatePerson });
  };

  // Function to handle the delete operation on person list
  deletePersonHandler = personId => {
    const oldPersonState = [...this.state.persons];
    oldPersonState.splice(personId, 1);
    this.setState({ persons: oldPersonState });
  };

  render() {
    let personsDoc = null;
    personsDoc =
      this.state.persons && this.state.togglePersons ? (
        <Persons
          persons={this.state.persons}
          viewPersonHandlerRef={this.viewPersonHandler}
          deletePersonHandlerRef={this.deletePersonHandler}
        />
      ) : (
        <h4 style={{ textAlign: "center", color: "green" }}>
          Please click the toggle button!!{" "}
        </h4>
      );

    let personDoc = null;
    personDoc =
      this.state.persons && this.state.togglePersons
        ? this.state.persons.map(person =>
            person.isViewPerson ? (
              <ViewPerson key={person.id} person={person}>
                {person.hobbies}
              </ViewPerson>
            ) : null
          )
        : null;

    return (
      <div>
        <TogglePersons
          togglePersonsListHandlerRef={this.togglePersonsListHandler}
        />
        {personsDoc}
        {personDoc}
      </div>
    );
  }
}

export default Main;
