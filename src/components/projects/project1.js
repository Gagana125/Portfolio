import React, { useEffect } from 'react';
import '../css/Project1.css';
import { Link } from 'react-router-dom';

// useEffect(() => {
//     // Scroll to the top of the page on route change
//     window.scrollTo(0, 0);
//   }, );

const Project1 = () => {
    useEffect(() => {
        // Scroll to the top of the page on route change
        window.scrollTo(0, 0);
      }, );
    return (
        <div className="project-detail">
            <h2>Interlearn - Institute Management System</h2>
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
                        This is an institute management system where students can enroll in courses, and make payments online.
                        And also the teachers can reserve an available slot for their classes and upload the teaching materials for the relevant class.
                        The students can view the uploaded materials and download them.
                    </p>

                    <h3>My Role</h3>
                    <p>Group leader and Full Stack developer</p>

                    <h3>Technologies Used</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>MySQL</li>
                    </ul>

                    <h4>Github Repository - <Link to={`https://github.com/Dhatchaya/Interlearn-`}>interlearn</Link></h4>

                    <h3>Key Features</h3>
                    <ul>
                        <li>Upload and download teaching materials.</li>
                        <li>Check the availability and reserve slots for classes.</li>
                        <li>Enrollments and payment for classes.</li>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Project1;
