import React, { useState } from 'react';

function Welcome() {
  const [message, setMessage] = useState('Welcome ');

  const handleClick = () => {
    setMessage('Thanks for giving me opportunity');
  };

  return (
    <>
    <div>
      <h1 className='co'>Question 1</h1>
      <h1>{message}</h1>
      <button onClick={handleClick}>Click me!</button>
    </div>
    <hr></hr>
    </>
  );
}

export default Welcome;