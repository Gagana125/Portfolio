import React from 'react';

const Project4 = () => {
  return (
    <div className="project-detail">
      <h2>Project 1: E-Commerce Website</h2>
      <img src="/assets/images/project1.jpg" alt="Project 1" className="project-image" />
      <div className="project-content">
        <h3>About the Project</h3>
        <p>
          This is an e-commerce website that allows users to browse, search, and purchase products.
          The platform includes features like user authentication, payment gateways, and an admin dashboard.
        </p>

        <h3>My Role</h3>
        <p>Frontend and Backend Developer.</p>

        <h3>Technologies Used</h3>
        <ul>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
        </ul>

        <h3>Key Features</h3>
        <ul>
          <li>Responsive design for mobile and desktop.</li>
          <li>Secure payment integration with Stripe.</li>
          <li>Product filtering and search functionality.</li>
        </ul>
      </div>
    </div>
  );
};

export default Project4;
