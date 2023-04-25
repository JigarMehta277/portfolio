import React, { useState, useEffect } from 'react';
import "./about.css";



export default function About() {

  return (
    <div className='portfolio-container'>
      <div className='AboutPage'>
        <img src='./images/jigar.jpeg'/>
      </div>
      <div className='textname'>
        <h2>Jigar Mehta</h2>
        <p className='contact'><span>Contact Number:</span>7827786087</p>
        <p className='email'><span>Email Id</span>Jigarmehta277@gmail.com</p>
        <p className='linkedin'><span>Linked link:</span><a href='https://www.linkedin.com/in/jigar-mehta-673228190/'>Jigar Mehta Linked in</a></p>
        <p className='github'><span>Github link:</span><a href='https://github.com/JigarMehta277'>Jigar Mehta githubn</a></p>
        <p className='about'><span>About:</span>Actively looking for Summer'23 Co-Op | Web Developer | JavaScript | Full Stack Developer | Post-graduate student at Humber college</p>
      </div>
    </div>
  );
}