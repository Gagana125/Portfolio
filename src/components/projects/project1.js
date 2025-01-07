import React, { useEffect } from 'react';
import '../css/Project1.css';
import TitleProject from '../UI/TitleProject';
import AboutSection from '../UI/AboutSection';
import GallerySection from '../UI/GallerySection';
import FeatureSection from '../UI/FeatureSection';

const technologies = [
    { name: "HTML", url: "/assets/html.png" },
    { name: "CSS", url: "/assets/css-3.png" },
    { name: "JavaScript", url: "/assets/js.png" },
    { name: "MySQL", url: "/assets/mysql.png" },
    { name: "PHP", url: "/assets/php.png" },
  
  ];
  
  const images = [
    { image: "/assets/projects/1.jpg", alt: "Project Screenshot 1" },
    { image: "/assets/projects/2.jpg", alt: "Project Screenshot 1" },
    { image: "/assets/projects/3.jpg", alt: "Project Screenshot 1" },
    { image: "/assets/projects/4.jpg", alt: "Project Screenshot 1" },
    { image: "/assets/projects/5.jpg", alt: "Project Screenshot 1" },
    { image: "/assets/projects/6.jpg", alt: "Project Screenshot 1" },
  ];
  
  const features = [
    "Upload and download teaching materials." ,
    "Check the availability and reserve slots for classes." ,
    "Enrollments and payment for classes." ,
  ];

const Project1 = () => {
    useEffect(() => {
        // Scroll to the top of the page on route change
        window.scrollTo(0, 0);
      }, );
    return (
        <div className="project-detail">
        <TitleProject title="Interlearn - Institute Management System" motto="Make the move for a better life with us"/>

        <GallerySection images={images}/>

        <AboutSection 
            description="This is an institute management system where students can enroll in courses, and make payments online.
            And also the teachers can reserve an available slot for their classes and upload the teaching materials for the relevant class.
            The students can view the uploaded materials and download them."
            role="Group leader and Full Stack developer"
            technologies={technologies}
        />

        <FeatureSection link="https://github.com/Dhatchaya/Interlearn-" features={features} />
        </div>

       
    );
};

export default Project1;
