import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Fadhlu', age: 24 },
      { name: 'Sasa', age: 22 },
    ],
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

    return (
      <div className="App">
        <button
          style={btnStyle}
          onClick={() => this.switchNameHandler('Fadhlu haha')}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          inputName={this.inputNameChangedHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Fadhlu hihi')}
          inputName={this.inputNameChangedHandler}
        >
          Hobby: Makan kuaci
        </Person>
      </div>
    );
  }
}

export default App;
