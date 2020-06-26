import React from 'react';
import styled from 'styled-components';
import './Person.css';

const StyledDiv = styled.div`
  margin: 2rem auto;
  width: 30%;
  border: 1px solid #aaa;
  box-shadow: 0 2px 4px #999;
  border-radius: 0.5rem;
  text-align: center;
  padding-bottom: 1rem;

  hr {
    border: 1px solid #aaa;
  }

  @media (min-width: 500px);
   {
    width: '400px';
  }
`;

const Person = props => {
  // const personStyle = {
  //   '@media (min-width: 500px)': {
  //     width: '400px',
  //   },
  // };

  return (
    // <div
    //   className="Person"
    //    @ts-ignore
    //   style={personStyle}
    // >
    <StyledDiv>
      <p onClick={props.click}>
        I'm a {props.name} and i'm {props.age} years old
      </p>
      <p>{props.children}</p>
      <hr />
      <input type="text" onChange={props.inputName} value={props.name} />
    </StyledDiv>
    // </div>
  );
};

export default Person;
