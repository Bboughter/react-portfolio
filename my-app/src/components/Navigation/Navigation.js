import React from 'react';
import './Navigation.css'; 

function NavigationBar() {
  return (
    <nav className="nav"> 
      <ul>
        <li>
          <a className="nav-item" href="/">About Me</a> 
        </li>
        <li>
          <a className="nav-item" href="/portfolio">Portfolio</a> 
        </li>
        <li>
          <a className="nav-item" href="/contact">Contact</a> 
        </li>
        <li>
        <a href="https://docs.google.com/document/d/1NpBvZVir2NPJUnXwvdd2s7XMLX2URY-lj7DM8JTQOtg/edit?usp=sharing" target='_blank' className='nav-item'>Resume</a>
        </li>
        <li>
          <a className="nav-item" href="/skills">Skills</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;