import React, { useEffect } from 'react';
import '../css/Project1.css'
import { Link } from 'react-router-dom';

const Project2 = () => {
  useEffect(() => {
          // Scroll to the top of the page on route change
          window.scrollTo(0, 0);
        }, );
  return (
    <div className="project-detail">
      <h2>TravelMate - Travelling Mobile App</h2>
      {/* <img src="/assets/images/project1.jpg" alt="Project 1" className="project-image" /> */}
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
            This is a travelling mobile application developed for travelling in Sri Lanka.
            The application provides a platform for travellers to book their trips and accommodations.
            The travellers can search for trips and accommodations based on their preferences and book them.
            The application also provides a secure payment gateway for the travellers to make their payments.
            There is an additional feature where the expertised travellers, mainly travel guides can create their own public trips and publish them on the platform, therefore others can join.
            Also, the travel guides can register on the platform and provide their services to the travellers.
            Venders can sell their products and services through the platform which the travellers can purchase.
          </p>

          <h3>My Role</h3>
          <p>Full Stack Developer.</p>

          <h3>Technologies Used</h3>
          <ul>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
          </ul>

          <h4>Github Repository - <Link to={`https://github.com/TeamTravelmate`}>TravelMate</Link> </h4>

          <h3>Key Features</h3>
          <ul>
            <li>Responsive design for mobile and desktop for administrator.</li>
            <li>Secure payment integration with Stripe.</li>
            <li>Can make their own trips and join for public trips conveniently.</li>
            <li>Can purchase products and services from the venders.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project2;
