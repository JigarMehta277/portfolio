import React, { useState, useEffect } from 'react';
import "./Project.css";


export default function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./json/projects.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data.map(item => (
          <div className="ProjectImage">
            <img src={item.image} alt="Project_Image" id="imagePLU"/>
            <h2>{item.title}</h2>
            <a href={item.url}>{item.title} url</a>
            <p>{item.slug}</p>
            <p>{item.content}</p>
          </div>
      ))}
    </div>
  );
}
