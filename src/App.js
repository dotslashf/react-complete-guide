import React, { Component } from 'react';
import Person from './Person/Person';
import styled from 'styled-components';
import './App.css';

const StyledButton = styled.button`
  background-color: ${props => (props.alt ? '#e74c3c' : '#3498db')};
  color: #ecf0f1;
  border-radius: 6px;
  font: inherit;
  padding: 8px 16px;
  cursor: pointer;
  border: 0px solid #fff;

  &:hover {
    background-color: ${props => (props.alt ? '#c0392b' : '#2980b9')};
  }
`;
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
    // const btnStyle = {
    //   backgroundColor: '#3498db',
    //   color: '#ecf0f1',
    //   borderRadius: '6px',
    //   font: 'inherit',
    //   padding: '8px 16px',
    //   cursor: 'pointer',
    //   border: '0px solid #fff',
    //   ':hover': {
    //     backgroundColor: '#2980b9',
    //   },
    // };

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                inputName={event =>
                  this.inputNameChangedHandler(event, person.id)
                }
              />
            );
          })}
        </div>
      );

      // btnStyle.backgroundColor = '#e74c3c';
      // btnStyle[':hover'] = {
      //   backgroundColor: '#c0392b',
      // };
    }

    const cssClasses = [];
    if (this.state.persons.length <= 1) {
      cssClasses.push('red');
    }
    if (this.state.persons.length === 0) {
      cssClasses.push('bold');
    }

    return (
      <div className="App">
        <p className={cssClasses.join(' ')}>Just another example text</p>
        <StyledButton
          alt={this.state.showPerson}
          onClick={this.togglePersonHandler}
        >
          Toggle Person
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
