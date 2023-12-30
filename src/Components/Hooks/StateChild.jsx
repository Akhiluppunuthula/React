// StateChild.jsx
import React from 'react';

const StateChild = ({ count, onIncrement }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};

export default StateChild;
