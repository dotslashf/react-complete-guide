import React, { Component } from 'react';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import classes from './App.css';

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
    let btnClass = '';
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  inputName={event =>
                    this.inputNameChangedHandler(event, person.id)
                  }
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );

      btnClass = classes.Red;
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
        <p className={cssClasses.join(' ')}>Just another example text</p>
        <button className={btnClass} onClick={this.togglePersonHandler}>
          Toggle Person
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
