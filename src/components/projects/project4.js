import React, { useEffect } from 'react';
import '../css/Project1.css';
import TitleProject from '../UI/TitleProject';
import GallerySection from '../UI/GallerySection';
import AboutSection from '../UI/AboutSection';
import FeatureSection from '../UI/FeatureSection';

const technologies = [
  { name: "Java", url: "/assets/java.png" },
  { name: "Three.js", url: "/assets/images.png" },
  { name: "ARCore", url: "/assets/arcore.webp" },

];

const images = [
  { image: "/assets/projects/11.png", alt: "Project Screenshot 1" },
];

const features = [
  "Real-Time Light Detection" ,
  "Dynamic Shadow Rendering" ,
  "Mobile-Friendly Implementation" ,
];

const Project4 = () => {
  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo(0, 0);
  },);
  return (
    <div className="project-detail">
      <TitleProject title="Illumination of App based AR" motto="Realistic shadows rendering for mobile application"/>

      <AboutSection 
        description="The goal of this research is to create a mobile app-based AR application capable of detecting environmental light direction in real time and applying it to virtual objects to achieve photorealistic rendering.
    Shadows and reflections are key aspects of AR realism, and this study focuses on integrating these features without relying on computationally intensive processes or additional hardware.
    The application utilizes ARCore and Three.js to align virtual objects with real-world lighting conditions dynamically."
        role="Full Stack developer"
        technologies={technologies} 
        
      />

      <FeatureSection link="interlearn" features={features} />
      <GallerySection images={images}/>

      
    </div>
  );
};

export default Project4;
