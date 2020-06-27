import React from 'react';
import classes from './Cockpit.css';

const Cockpit = props => {
  let btnClass = '';

  if (props.showPerson) {
    btnClass = classes.Red;
  }

  const cssClasses = [];
  if (props.persons.length <= 1) {
    cssClasses.push(classes.red);
  }
  if (props.persons.length === 0) {
    cssClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <p className={cssClasses.join(' ')}>Just another example text</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Person
      </button>
    </div>
  );
};

export default Cockpit;
