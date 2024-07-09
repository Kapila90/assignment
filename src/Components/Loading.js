import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Loading() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
    <div>
      <h1 className='co'>Question 2</h1>
      {data.slice(0,25).map(item => (
        <div key={item.id} style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
          
          <h3>{item.id}</h3>
          <p>{item.title}</p>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
    <hr></hr>
  </>  
  );
  
}

export default Loading;