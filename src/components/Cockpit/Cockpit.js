import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = props => {
  const toggleBtnRef = useRef(null);

  // can use multiple useEffect
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // const timer = setTimeout(() => {
    //   console.log('Data saved to cloud');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      // clearTimeout(timer);
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
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Person
      </button>
      <AuthContext.Consumer>
        {context => <button onClick={context.login}>Login</button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(Cockpit);
