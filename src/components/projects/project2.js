import React, { useEffect } from 'react';
import '../css/Project1.css'
import TitleProject from '../UI/TitleProject';
import GallerySection from '../UI/GallerySection';
import AboutSection from '../UI/AboutSection';
import FeatureSection from '../UI/FeatureSection';

const technologies = [
  { name: "Flutter", url: "/assets/flutter.png" },
  { name: "Node.js", url: "/assets/programing.png" },
  { name: "PostgreSQL", url: "/assets/postgresql.png" },

];

const images = [
  { image: "/assets/projects/1.png", alt: "Project Screenshot 1" },
  { image: "/assets/projects/2.png", alt: "Project Screenshot 1" },
  { image: "/assets/projects/3.png", alt: "Project Screenshot 1" },
  { image: "/assets/projects/4.png", alt: "Project Screenshot 1" },
  { image: "/assets/projects/5.png", alt: "Project Screenshot 1" },
  { image: "/assets/projects/6.png", alt: "Project Screenshot 1" },
  { image: "/assets/projects/7.png", alt: "Project Screenshot 1" },

];

const features = [
  "Responsive design for mobile and desktop for administrator." ,
  "Secure payment integration with Stripe." ,
  "Can make their own trips and join for public trips conveniently." ,
  "Can purchase products and services from the venders."
];

const Project2 = () => {
  useEffect(() => {
          // Scroll to the top of the page on route change
          window.scrollTo(0, 0);
        }, );
  return (
    <div className="project-detail">
      <TitleProject title="TravelMate - Travelling Mobile App" motto="Wandering in Sri Lanka"/>

<AboutSection 
  description="This is a travelling mobile application developed for travelling in Sri Lanka.
            The application provides a platform for travellers to book their trips and accommodations.
            The travellers can search for trips and accommodations based on their preferences and book them.
            The application also provides a secure payment gateway for the travellers to make their payments.
            There is an additional feature where the expertised travellers, mainly travel guides can create their own public trips and publish them on the platform, therefore others can join.
            Also, the travel guides can register on the platform and provide their services to the travellers.
            Venders can sell their products and services through the platform which the travellers can purchase."
  role="Full Stack developer"
  technologies={technologies} 
  
/>

<FeatureSection link="https://github.com/TeamTravelmate" features={features} />
<GallerySection images={images}/>

      </div>
  );
};

export default Project2;
