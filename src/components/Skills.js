import React, { useState, useEffect } from 'react';
import "./Skills.css"

export default function Skills() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./json/skills.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data.map(item => (
          <div className="SkillWri">
            <h2>skills</h2>
            <h2>{item.name}</h2>
            <p>{item.prof}</p>
            <p>{item.learned_at}</p>
            <img src={item.image} alt="skills" width="155px" height="155px"></img>
          </div>
      ))}
    </div>
  );
}
