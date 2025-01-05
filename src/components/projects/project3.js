import React, { useEffect } from 'react';
import '../css/Project1.css';
import { Link } from 'react-router-dom';

const Project3 = () => {
  useEffect(() => {
          // Scroll to the top of the page on route change
          window.scrollTo(0, 0);
        }, );
  return (
    <div className="project-detail">
      <h2>Content Management System - Web AR</h2>
      <div className='project-content-outline'>
        <div className='project-images'>
          <img src="/assets/projects/1.jpg" alt="Project 1" className="project-image" />
          <img src="/assets/projects/2.jpg" alt="Project 1" className="project-image" />
          <img src="/assets/projects/3.jpg" alt="Project 1" className="project-image" />
          <img src="/assets/projects/4.jpg" alt="Project 1" className="project-image" />
          <img src="/assets/projects/5.jpg" alt="Project 1" className="project-image" />
          <img src="/assets/projects/6.jpg" alt="Project 1" className="project-image" />
        </div>
        <div className="project-content">
          <h3>About the Project</h3>
          <p>
            This project is an innovative AR-based CMS that empowers users to define dynamic interactions for 3D models within an AR scene. By leveraging AR technologies, the system bridges creativity and functionality, offering a seamless interface for non-technical users to create engaging AR experiences.
            The platform allows users to:

            Interact with 3D models (e.g., click events) for actions like changing colors, playing media, navigating to links, or resizing models.
            Assign content to specific targets, dynamically rendering them based on user-defined mappings.
            Manage and configure the entire AR experience through a user-friendly CMS interface.
          </p>

          <h3>My Role</h3>
          <p>Full Stack developer</p>

          <h3>Technologies Used</h3>
          <ul>
            <li>React.js</li>
            <li>MindAR</li>
            <li>AFrame</li>
            <li>Node.js</li>
            <li>PostgreSQL</li>
          </ul>

          <h4>Github Repository - <Link to={`https://github.com/Modelling-and-Simulation/CMS`}>CMS</Link></h4>

          <h3>Key Features</h3>
          <ul>
            <li>Interactive 3D Model Customization</li>
            <li>Dynamic Target-Content Mapping</li>
            <li>User-Friendly CMS Interface</li>
            <li>Responsive and Scalable Design</li>
            <li>Real-Time Synchronization</li>
          </ul>
        </div>
      </div>


    </div>
  );
};

export default Project3;
