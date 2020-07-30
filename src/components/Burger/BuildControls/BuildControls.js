import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {
    label: 'Salad',
    type: 'salad',
  },
  {
    label: 'Bacon',
    type: 'bacon',
  },
  {
    label: 'Meat',
    type: 'meat',
  },
  {
    label: 'Cheese',
    type: 'cheese',
  },
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(c => (
      <BuildControl
        key={c.label}
        label={c.label}
        added={() => props.addIngredient(c.type)}
        removed={() => props.removeIngredient(c.type)}
        disabled={props.disabled[c.type]}
      />
    ))}
  </div>
);

export default buildControls;
