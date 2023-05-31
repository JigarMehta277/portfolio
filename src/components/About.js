import React, { useState, useEffect } from 'react';
import "./about.css";



export default function About() {

  return (
    <div class="portfolioContainer">
      <div className='aboutme'>
        <h2>
          Jigar
        </h2>
        <h3>
          I am a web developer
        </h3>
        <p> I understand new things easily; I can fit in any environment</p>
        <a href='#' className='button'>Hire me</a>
      </div>
      <div className='image'>
        <img src='./images/jigar.png' alt="dp" id="dpImage"/>
      </div>
    </div>
  );
}