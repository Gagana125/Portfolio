import React from 'react';
import Card from './UI/Card';

const projectsData = [
  {
    id: 1,
    image: '/assets/images/bg1.jpg', // Replace with actual image paths
    title: 'Institute Management System',
    description: 'This is a brief description of project 1.',
    reverse: false, // This determines if image is on the left or right
  },
  {
    id: 2,
    image: '/assets/images/project2.jpg',
    title: 'Travel Mate',
    description: 'This is a brief description of project 2.',
    reverse: true,
  },
  {
    id: 3,
    image: '/assets/images/project3.jpg',
    title: 'Content Management System - AR',
    description: 'This is a brief description of project 3.',
    reverse: false,
  },
  {
    id: 4,
    image: '/assets/images/project3.jpg',
    title: 'Illumination for App based AR',
    description: 'This is a brief description of project 4.',
    reverse: false,
  },
];

function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projectsData.map((project) => (
          <Card key={project.id} 
            project={project} 
            image={project.image}
            paragraph={project.description}  
            link={`/projects/${project.id}`}/>
        ))}
      </div>
    </div>
  );
}

export default Projects;
