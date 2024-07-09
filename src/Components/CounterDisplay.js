// CounterDisplay.js
import React, { useContext } from 'react';
import { CounterContext } from './counterContext';

const CounterDisplay = () => {
  const { count } = useContext(CounterContext);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

export default CounterDisplay;