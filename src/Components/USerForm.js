import React, { useState } from 'react';

const UserForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue('');
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
    <div className='lin'>
      <h1 className='co'>Question 3</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>
          Enter your input:
          </h3>
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h3>
      <p>Submitted value: {submittedValue}</p>
      </h3>
    </div>
    <hr></hr>
    </>
  );
};

export default UserForm;