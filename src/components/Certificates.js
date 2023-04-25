import React, { useState, useEffect } from 'react';
import "./certificate.css";

export default function Certificates() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./json/certificates.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data.map(item => (
        <div className='certi'>
          <h2 className='certititle'>{item.name}</h2>
          <p className='certifiLevel'><span>Level:</span>{item.level}</p>
        </div>
      ))}
    </div>
  );
}
