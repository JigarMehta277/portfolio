import React, { useState, useEffect } from 'react';
import "./Academics.css";


export default function Academics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./json/academics.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div id='Institutes'>
      <h2>Institutes</h2>
      {data.map(item => (
        <div className='acContainer'>
          <div className='acImage'>
            <img src={item.image} alt="Image" width="150px" height="150px"></img>
          </div>
          <div>
            <h2>{item.clgname}</h2>
            <p>{item.degree}</p>
            <p>{item.course}</p>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}