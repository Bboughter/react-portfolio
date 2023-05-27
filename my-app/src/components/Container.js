import React, { useState } from 'react';
import NavigationBar from './Navigation';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import Portfolio from './Portfolio/Portfolio';
import Skills from './Skills/Skills';
import Footer from './Footer/Footer';

export default function Container() {
    const [currentPage, setCurrentPage] = useState('About Me');

    // Returns the page depending on what the current value of 'currentPage' is
    const renderPage = () => {
        if (currentPage === 'About Me') {
            return <AboutMe />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Skills') {
            return <Skills />;
        };
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavigationBar handlePageChange={handlePageChange}/>
            {renderPage()}
           
                
                <Footer />
        </div>
    );
}