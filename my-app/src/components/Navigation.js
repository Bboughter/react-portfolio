import React from 'react';
import '../index.css';



function NavigationBar({ handlePageChange }) {
  return (
    <nav className="nav"> 
      <ul>
        <li>
          <a className="nav-item" onClick={() => handlePageChange('About Me')} href="#aboutme">About Me</a> 
        </li>
        <li>
          <a className="nav-item" onClick={() => handlePageChange('Portfolio')} href="#portfolio">Portfolio</a> 
        </li>
        <li>
          <a className="nav-item" onClick={() => handlePageChange('Contact')} href="#contact">Contact</a> 
        </li>
        <li>
        <a href="https://docs.google.com/document/d/1NpBvZVir2NPJUnXwvdd2s7XMLX2URY-lj7DM8JTQOtg/edit?usp=sharing" target='_blank' className='nav-item'>Resume</a>
        </li>
        <li>
          <a className="nav-item" onClick={() => handlePageChange('Skills')} href="#skills">Skills</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;