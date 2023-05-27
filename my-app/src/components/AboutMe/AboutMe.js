import React from 'react';
import './AboutMe.css';
import headshot from '../../assets/images/headshot.jpg';

const AboutMe = () => {
    return (
        <section className="about-me">
            <h2>Full-Stack Developer, Sports Enthusiast</h2>
            <div className="about-me-content">
                <img src= {headshot} alt="Brittany Boughter" />
                <div>
                    <p>As a recent graduate of a full stack coding bootcamp and former law enforcement dispatcher, I possess a unique blend of technical skills and real-world experience.</p>
                    <p>My background in law enforcement has honed my ability to think critically and work well under pressure, skills that I believe will translate well to the fast-paced world of tech.</p>               
                    <p>I'm eager to apply my skills and experience to a new career in the tech industry and am excited to take on new challenges and opportunities for growth.</p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;