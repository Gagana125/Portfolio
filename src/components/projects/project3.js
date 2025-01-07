import React, { useEffect } from 'react';
import '../css/Project1.css';
import TitleProject from '../UI/TitleProject';
import GallerySection from '../UI/GallerySection';
import AboutSection from '../UI/AboutSection';
import FeatureSection from '../UI/FeatureSection';

const technologies = [
  { name: "React.js", url: "/assets/atom.png" },
  { name: "Node.js", url: "/assets/programing.png" },
  { name: "Mind AR", url: "/assets/mind.png" },
  { name: "AFrame", url: "/assets/aframe.png" },
  { name: "PostgreSQL", url: "/assets/postgresql.png" },

];

const images = [
  { image: "/assets/projects/7.jpg", alt: "Project Screenshot 1" },
  { image: "/assets/projects/8.jpg", alt: "Project Screenshot 1" },
  { image: "/assets/projects/9.jpg", alt: "Project Screenshot 1" },
  { image: "/assets/projects/10.jpg", alt: "Project Screenshot 1" },
  { image: "/assets/projects/10.png", alt: "Project Screenshot 1" },

];

const features = [
  "Interactive 3D Model Customization",
  "Dynamic Target-Content Mapping",
  "User-Friendly CMS Interface",
  "Responsive and Scalable Design",
  "Real-Time Synchronization"
];

const Project3 = () => {
  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo(0, 0);
  },);
  return (
    <div className="project-detail">
      <TitleProject title="Content Management System - Web AR" motto="Where contents and targets meet" />

      <GallerySection images={images} />

      <AboutSection
        description="This project is an innovative AR-based CMS that empowers users to define dynamic interactions for 3D models within an AR scene. By leveraging AR technologies, the system bridges creativity and functionality, offering a seamless interface for non-technical users to create engaging AR experiences.
            The platform allows users to:
            Interact with 3D models (e.g., click events) for actions like changing colors, playing media, navigating to links, or resizing models.
            Assign content to specific targets, dynamically rendering them based on user-defined mappings.
            Manage and configure the entire AR experience through a user-friendly CMS interface."
        role="Full Stack developer"
        technologies={technologies}

      />

      <FeatureSection link="https://github.com/Modelling-and-Simulation/CMS" features={features} />

    </div>
  );
};

export default Project3;
