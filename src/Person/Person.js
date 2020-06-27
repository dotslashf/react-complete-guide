import React from 'react';
import classes from './Person.css';

const Person = props => {
  const rnd = Math.random();

  if (rnd > 0.7) {
    throw new Error('Something got error');
  }

  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm a {props.name} and i'm {props.age} years old
      </p>
      <p>{props.children}</p>
      <hr />
      <input type="text" onChange={props.inputName} value={props.name} />
    </div>
  );
};

export default Person;
