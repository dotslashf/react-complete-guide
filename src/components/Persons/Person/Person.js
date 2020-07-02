import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import classes from './Person.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and i'm {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <hr />
        <input
          type="text"
          onChange={this.props.inputName}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

export default Person;
