import React from 'react';
import Radium from 'radium';
import './Person.css';

const Person = props => {
  const personStyle = {
    '@media (min-width: 500px)': {
      width: '400px',
    },
  };

  return (
    <div
      className="Person"
      // @ts-ignore
      style={personStyle}
    >
      <p onClick={props.click}>
        I'm a {props.name} and i'm {props.age} years old
      </p>
      <p>{props.children}</p>
      <hr />
      <input type="text" onChange={props.inputName} value={props.name} />
    </div>
  );
};

export default Radium(Person);
