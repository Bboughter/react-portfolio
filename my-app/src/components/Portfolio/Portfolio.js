import React from 'react';
import Project from '../Project/Project';
// 
import prj1 from '../../assets/images/LitList.png';
import prj2 from '../../assets/images/ChatterBox.png';
import prj3 from '../../assets/images/habitTracker.png';
import prj4 from '../../assets/images/placeholder.jpg';
import prj5 from '../../assets/images/employeeTracker.png';
import prj6 from '../../assets/images/workDayScheduler.png';
import './Portfolio.css'; // import the CSS file

const Portfolio = () => {
  // Actual projects data
  // Add my prtojects here:
  const projects = [
    { title: 'Project 1: LitList', imageUrl: prj1, deployedUrl: 'https://samanthaahn.github.io/fiesta-event/', repoUrl: 'https://github.com/samanthaahn/fiesta-event'},
    { title: 'Project 2: ChatterBox', imageUrl: prj2, deployedUrl: 'https://infinite-retreat-60959.herokuapp.com/login', repoUrl: 'https://github.com/ctvb/Chatter-Box' },
    { title: 'Project 3: Habit Tracker', imageUrl: prj3, deployedUrl: 'https://whispering-gorge-05814.herokuapp.com/', repoUrl: 'https://github.com/samanthaahn/magic-list' },
    { title: 'Project 4: E-Commerce Back End', imageUrl: prj4, deployedUrl: 'https://drive.google.com/file/d/1AWyk-oYYLcjBk4CCA9DnHhPo6u49c1bG/view', repoUrl: 'https://github.com/Bboughter/E-commerce-back-end' },
    { title: 'Project 5: Employee Tracker', imageUrl: prj5, deployedUrl: 'https://drive.google.com/file/d/18M4ERZpt8_kXZdSMl49s5O6l1m6vRG1M/view', repoUrl: 'https://github.com/Bboughter/employee-tracker' },
    { title: 'Project 6: Work Day Scheduler', imageUrl: prj6, deployedUrl: 'https://bboughter.github.io/work-day-scheduler/', repoUrl: 'https://github.com/Bboughter/work-day-scheduler' },
    // ...
  ];

  return (
    <div className="mainproject">
      <section className="portfolio">
        <h2>Portfolio</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;