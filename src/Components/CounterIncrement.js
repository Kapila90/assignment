// CounterIncrement.js
import React, { useContext } from 'react';
import { CounterContext } from './counterContext';

const CounterIncrement = () => {
  const { incrementCount } = useContext(CounterContext);

  return (
    <div>
        <h3 className='co'>Question 4</h3>
    
    <button className='inc' onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default CounterIncrement;