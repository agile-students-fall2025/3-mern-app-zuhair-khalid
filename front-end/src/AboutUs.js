import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AboutUs() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5002/about')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>About Us</h1>
      <img 
        src={data.photoUrl} 
        alt={data.name} 
        style={{ width: '200px', borderRadius: '10px' }} 
      />
      <h2>{data.name}</h2>
      {data.description.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  );
}

export default AboutUs;