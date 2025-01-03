import React from "react";
import './css/Resume.css';

const Resume = () => {
  return (
    <div className="resume-outline">
      <h1>Resume</h1>
      <div className="resume-image">
       <img className="resume-img" src="../../../assets/bg1.jpg" alt="resume" />
      </div>
      <div className="resume-content">
      <h2>Education</h2>
      <p className="title">BSc. (Hons.) in Computer Science</p>
      <div className="details">
        <p>University of Colombo</p>
        <p>2021 - 2025</p>
      </div>
      <p className="title">School</p>
        <div className="details">
            <p>Sri Sumangala Balika Maha Vidyalaya</p>
            <p>2005 - 2018</p>
        </div>
        <hr />
        <h2>Work Experience</h2>
        <p className="title">Software Engineer Intern (Reasearch Intern)</p>
        <div className="details">
            <p>University of Colombo School of Computing</p>
            <p>2023 Nov - 2024 May</p>
        </div> 
      </div>
      
    </div>
  );
};

export default Resume;