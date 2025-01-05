import React, { useEffect } from 'react';
import '../css/Project1.css';
import { Link } from 'react-router-dom';

const Project4 = () => {
  useEffect(() => {
          // Scroll to the top of the page on route change
          window.scrollTo(0, 0);
        }, );
  return (
    <div className="project-detail">
      <h2>Illumination of App based AR</h2>
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
                            The goal of this research is to create a mobile app-based AR application capable of detecting environmental light direction in real time and applying it to virtual objects to achieve photorealistic rendering. 
                            Shadows and reflections are key aspects of AR realism, and this study focuses on integrating these features without relying on computationally intensive processes or additional hardware. 
                            The application utilizes ARCore and Three.js to align virtual objects with real-world lighting conditions dynamically.
                            </p>
        
                            <h3>My Role</h3>
                            <p>Full Stack developer</p>
        
                            <h3>Technologies Used</h3>
                            <ul>
                                <li>ARCore</li>
                                <li>Three.js</li>
                                <li>Java</li>
                            </ul>
        
                            <h4>Github Repository - <Link>interlearn</Link></h4>
        
                            <h3>Key Features</h3>
                            <ul>
                                <li>Real-Time Light Detection</li>
                                <li>Dynamic Shadow Rendering</li>
                                <li>Mobile-Friendly Implementation</li>
                            </ul>
                        </div>
      </div>


    </div>
  );
};

export default Project4;
