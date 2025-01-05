import React, { useState, useEffect } from 'react';
import './css/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    // console.log(self.offsetHeight);

    sections.forEach((section) => {
      const offsetTop = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
        setActiveSection(section.getAttribute('id'));
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <h1 className="logo">GAGANA</h1>
      <ul className="nav-links">
        {['home', 'about', 'resume', 'projects', 'contact'].map((section) => (
          <li
            key={section}
            className={activeSection === section ? 'active' : ''}
          >
            <Link
              // to={section === 'home' ? `/` : `${section}`}
              to={`/`}
              onClick={() => {
                document.getElementById(section).scrollIntoView({ behavior: 'smooth', block: 'start', 
                  inline: 'nearest' });
                console.log(`Navigated to ${section}`);
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      {/* <button className="cv-btn"> */}
      <a href="./assets/myfile.pdf" download>
    <button className="cv-btn">Download CV</button>
  </a>
        {/* Download CV</button> */}
    </nav>
  );
};

export default Header;
