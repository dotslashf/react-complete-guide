import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Fadhlu', age: 24 },
      { id: 2, name: 'Sasa', age: 22 },
    ],
    showPerson: false,
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: 'Syahfira', age: 19 },
      ],
    });
  };

  inputNameChangedHandler = (event, id) => {
    // find index person
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    // assign person in persons list using personIndex
    const person = {
      ...this.state.persons[personIndex],
    };

    // change value of person name
    person.name = event.target.value;

    // copying persons array then assign index the new person value
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    this.setState({
      showPerson: !this.state.showPerson,
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons,
    });
  };

  render() {
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.inputNameChangedHandler}
          />
        </div>
      );
    }

    const cssClasses = [];
    if (this.state.persons.length <= 1) {
      cssClasses.push(classes.red);
    }
    if (this.state.persons.length === 0) {
      cssClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <Cockpit
          persons={this.state.persons}
          showPerson={this.state.showPerson}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
