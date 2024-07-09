// counterContext.js
import { createContext, useState } from 'react';

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <CounterContext.Provider value={{ count, incrementCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterProvider, CounterContext };