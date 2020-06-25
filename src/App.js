import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Fadhlu', age: 24 },
      { name: 'Sasa', age: 22 },
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

  inputNameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'Fadhlu', age: 24 },
        { name: event.target.value, age: 19 },
      ],
    });
  };

  togglePersonHandler = () => {
    this.setState({
      showPerson: !this.state.showPerson,
    });
  };

  render() {
    const btnStyle = {
      backgroundColor: '#3498db',
      color: '#ecf0f1',
      borderRadius: '6px',
      font: 'inherit',
      padding: '8px 16px',
      cursor: 'pointer',
      border: '0px solid #fff',
    };

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <button style={btnStyle} onClick={this.togglePersonHandler}>
          Toggle Person
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
