import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = props => {
  // can use multiple useEffect
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    const timer = setTimeout(() => {
      alert('Data saved to cloud');
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  let btnClass = '';

  if (props.showPerson) {
    btnClass = classes.Red;
  }

  const cssClasses = [];
  if (props.personsLength <= 1) {
    cssClasses.push(classes.red);
  }
  if (props.personsLength === 0) {
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

export default React.memo(Cockpit);
