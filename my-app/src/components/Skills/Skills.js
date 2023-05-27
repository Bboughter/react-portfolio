import React from 'react';

const Skills = () => {
    return (
        <section className="about-me">
            <h2> Front-end Proficiencies </h2>
            <ul>
                <li>HTML, CSS, JavaScript, React, Bootstrap, amongst others.</li>
                <li>Experience in responsive web design that can be used across all devices.</li> <br />
            </ul>
            <h2>Back-end Proficiencies</h2>
            <ul>
                <li>Building secure, server-side applications using Node.js, Express.js, and in Python.</li>
                <li>Building and executing APIs for front-end use, including GraphQL integration.</li>
                <li>Database creation and management, with experiece in relational and NoSQL databases along with MySQL and MongoDB.</li>
                <li>Authentication protocols including OAuth and JWT.</li>
                <li>Modern development techniques and methods, such as Git, Agile, and test-driven development.</li>
            </ul>
        </section>
    );
}

export default Skills;