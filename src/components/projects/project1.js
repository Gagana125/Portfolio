import React from 'react';
import '../css/Project1.css';
import { Link } from 'react-router-dom';

const Project1 = () => {
    return (
        <div className="project-detail">
            <h2>Interlearn - Institute Management System</h2>
            <img src="/assets/images/project1.jpg" alt="Project 1" className="project-image" />
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

                <h4>Github Repository - <Link>interlearn</Link></h4>

                <h3>Key Features</h3>
                <ul>
                    <li>Upload and download teaching materials.</li>
                    <li>Check the availability and reserve slots for classes.</li>
                    <li>Enrollments and payment for classes.</li>
                </ul>
            </div>
        </div>
    );
};

export default Project1;
