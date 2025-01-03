import React from 'react';
import Section from './UI/Section';
import './css/About.css';

const About = () => {

    return(
        <Section className="about" id="about">
            <h2>About Me</h2>
            <div className='about-outline'>
            <div className="about-img">
                <img className="about-image" src="/assets/bg2.jpg" alt="Gagana Samarasekara" />
            </div>
            <div className='about-content'>
            <p>
              I am Gagana Samarasekara, a final-year Computer Science undergraduate at the University of Colombo School of Computing. 
              I am passionate about technology, with a strong interest in both Augmented Reality (AR) and web development. 
              I enjoy exploring innovative ways to create impactful applications that blend creativity with functionality. 
              Over the years, I’ve successfully balanced academics with extracurricular activities, which has shaped me into a well-rounded individual.  
            </p>
            <p>     
              During my school and university years, I actively participated in sports, with table tennis being my main focus, and won several tournaments. 
              I was also involved in clubs like AIESEC and Rotaract, where I gained valuable experience in teamwork and leadership. 
              These experiences have taught me how to collaborate effectively and take on leadership roles when needed. 
              I bring this same dedication and enthusiasm to all my projects and look forward to contributing to exciting challenges in both AR and web development.  

            </p>
            </div>
            </div>
            
            
        </Section>
    );
};

export default About;