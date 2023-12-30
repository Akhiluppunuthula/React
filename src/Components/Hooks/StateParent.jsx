// StateParent.jsx
import React, { useState } from 'react';
import StateChild from './StateChild';

const StateParent = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <StateChild count={count} onIncrement={onIncrement} />
    </div>
  );
};

export default StateParent;

