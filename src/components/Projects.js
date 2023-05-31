import React, { useState, useEffect } from 'react';
import "./project.css";


export default function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./json/projects.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div id='Projects'>
      <h2>Project</h2>
      <div className='project'>
        {data.map(item => (
            <div className="ProjectImage">
              <img src={item.image} alt="Project_Image" id="imagePLU" height={"200px"} width={"200px"}/>
              <h2>{item.title}</h2>
              <a href={item.url}>{item.title}</a>
              <p>{item.slug}</p>
              <p>{item.content}</p>
            </div>
        ))}
      </div>
    </div>
  );
}
