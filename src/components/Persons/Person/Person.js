import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please login first!</p>
        )}
        <p onClick={this.props.click}>
          I'm a {this.props.name} and i'm {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <hr />
        <input
          type="text"
          // ref={inputEl => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
          onChange={this.props.inputName}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  inputName: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
};

export default withClass(Person, classes.Person);
