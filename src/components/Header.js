import React from 'react'
import "./header.css";


export default function Header(){

  return(
      <nav className='nav'>
        <div>
          <img src="./images/lo.png" height="50px" width="50px"/>
        </div>
        <div className='navigationBar'>
          <ul>
            <li><a href="#Projects"> Projects</a></li>
            <li><a href="#skills"> Skills</a></li>
            <li><a href="#Institutes"> Institutes</a></li>
          </ul>
        </div>
      </nav>
  )
}