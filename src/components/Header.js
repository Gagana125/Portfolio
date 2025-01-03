import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Scroll event handler to update active section
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const offsetTop = section.offsetTop - 100;
      const height = section.offsetHeight;

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
        setActiveSection(section.getAttribute('id'));
      }
    });
  };

  // Use useEffect to add/remove event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <h1 className="logo">GAGANA</h1>
      {/* <img className='logo' src='../assets/logo1.png' alt='logo' /> */}
      <ul className="nav-links">
        {/* Using Link components from react-router-dom */}
        {['home', 'about', 'resume', 'projects', 'contact'].map((section) => (
          <li
            key={section}
            className={activeSection === section ? 'active' : ''}
          >
            <Link to={`${section}`} smooth>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
