import React from "react";
import './css/Resume.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Resume = () => {
  return (
    <section id="resume" className="resume-container">
      <h1 className="heading">Resume</h1>
      <div className="resume-outline">
        <div className="resume-image">
          <img className="resume-img" src="../../../assets/bg4.jpg" alt="resume" />
        </div>
        <div className="resume-content">
          <h2 className="resume-heading">Education</h2>
          <p className="title">BSc. (Hons.) in Computer Science</p>
          <div className="details">
            <p>University of Colombo</p>
            <p>2021 - 2025</p>
          </div>
          <p className="title">Diploma in Information Technology</p>
          <div className="details">
            <p>University of Colombo</p>
            <p>2020 - 2021</p>
          </div>
          <p className="title">School</p>
          <div className="details">
            <p>Sri Sumangala Balika Maha Vidyalaya</p>
            <p>2005 - 2018</p>
          </div>
          <hr />
          <h2 className="resume-heading">Work Experience</h2>
          <p className="title">Software Engineer Intern (Reasearch Intern)</p>
          <div className="details">
            <p>University of Colombo School of Computing</p>
            <p>2023 Nov - 2024 May</p>
          </div>
        </div>
      </div>
      <div className="tech-stack-outline">
        <h2 className="resume-heading">Technology Stack</h2>
        <div >
          <ul className="tech-stack">
            <div className="tech-stack-list">

              <h6 className="tech-name">Frontend Technologies</h6>

              <div className="tech-bar-list">
                <div className="tech-bar">
                  <li>HTML</li>
                  <ProgressBar now={80} label={`${80}%`} variant="custom-bar" />
                </div>
                <div className="tech-image">
                  <img className="tech-image" src="/assets/html.png" alt="" />
                </div>
              </div>

              <div className="tech-bar-list">
                <div className="tech-bar">
                  <li>CSS</li>
                  <ProgressBar now={80} label={`${80}%`} variant="custom-bar" />
                </div>
                <div className="tech-image">
                  <img className="tech-image" src="/assets/css-3.png" alt="" />
                </div>
              </div>

              <div className="tech-bar-list">
                <div className="tech-bar">
                  <li>React.js</li>
                  <ProgressBar now={70} label={`${70}%`} variant="custom-bar" />
                </div>
                <div className="tech-image">
                  <img className="tech-image" src="/assets/atom.png" alt="" />
                </div>
              </div>

              <h6 className="tech-name">Backend Technologies</h6>

              <div className="tech-bar-list">
                <div className="tech-bar">
                  <li>Node.js</li>
                  <ProgressBar now={60} label={`${60}%`} variant="custom-bar" />
                </div>
                <div className="tech-image">
                  <img className="tech-image" src="/assets/programing.png" alt="" />
                </div>
              </div>

              <h6 className="tech-name">AR/VR related Technologies</h6>

              <div className="tech-bar-list">
                <div className="tech-bar">
                  <li>AFrame</li>
                  <ProgressBar now={60} label={`${60}%`} variant="custom-bar" />
                </div>
                <div className="tech-image">
                  <img className="tech-image" src="/assets/aframe.png" alt="" />
                </div>
              </div>
              <div className="tech-bar-list">
                <div className="tech-bar">
                  <li>Mind AR</li>
                  <ProgressBar now={60} label={`${60}%`} variant="custom-bar" />
                </div>
                <div className="tech-image">
                  <img className="tech-image" src="/assets/mind.png" alt="" />
                </div>
              </div>
              <div className="tech-bar-list">
                <div className="tech-bar">
                  <li>Three.js</li>
                  <ProgressBar now={60} label={`${60}%`} variant="custom-bar" />
                </div>
                <div className="tech-image">
                  <img className="tech-image" src="/assets/images.png" alt="" />
                </div>
              </div>
            </div>

            <div className="tech-stack-list">

              <h6 className="tech-name">Programming Languages</h6>

              <div className="tech-bar-list">
                <div className="tech-bar">
                  <li>C</li>
                  <ProgressBar now={80} label={`${80}%`} variant="custom-bar" />
                </div>
                <div className="tech-image">
                  <img className="tech-image" src="/assets/c.png" alt="" />
                </div>
              </div>
              <div className="tech-bar-list">
                <div className="tech-bar">
                  <li>Java</li>
                  <ProgressBar now={60} label={`${60}%`} variant="custom-bar" />
                </div>
                <div className="tech-image">
                  <img className="tech-image" src="/assets/java.png" alt="" />
                </div>
              </div>
              <div className="tech-bar-list">
                <div className="tech-bar">
                  <li>C++</li>
                  <ProgressBar now={60} label={`${60}%`} variant="custom-bar" />
                </div>
                <div className="tech-image">
                  <img className="tech-image" src="/assets/c2.png" alt="" />
                </div>
              </div>
              <div className="tech-bar-list">
                <div className="tech-bar">
                  <li>Python</li>
                  <ProgressBar now={60} label={`${60}%`} variant="custom-bar" />
                </div>
                <div className="tech-image">
                  <img className="tech-image" src="/assets/py.png" alt="" />
                </div>
              </div>

              <h6 className="tech-name">Database</h6>

              <div className="tech-bar-list">
                <div className="tech-bar">
                  <li>MySQL</li>
                  <ProgressBar now={80} label={`${80}%`} variant="custom-bar" />
                </div>
                <div className="tech-image">
                  <img className="tech-image" src="/assets/mysql.png" alt="" />
                </div>
              </div>
              <div className="tech-bar-list">
                <div className="tech-bar">
                  <li>PostgreSQL</li>
                  <ProgressBar now={70} label={`${70}%`} variant="custom-bar" />
                </div>
                <div className="tech-image">
                  <img className="tech-image" src="/assets/postgresql.png" alt="" />
                </div>
              </div>
              <div className="tech-bar-list">
                <div className="tech-bar">
                  <li>MongoDB</li>
                  <ProgressBar now={60} label={`${60}%`} variant="custom-bar" />
                </div>
                <div className="tech-image">
                  <img className="tech-image" src="/assets/mongo.png" alt="" />
                </div>
              </div>

              <h6 className="tech-name">Mobile Application</h6>
              
              <div className="tech-bar-list">
                <div className="tech-bar">
                  <li>Flutter</li>
                  <ProgressBar now={70} label={`${70}%`} variant="custom-bar" />
                </div>
                <div className="tech-image">
                  <img className="tech-image" src="/assets/flutter.png" alt="" />
                </div>
              </div>

            </div>

          </ul>
        </div>
      </div>
    </section>

  );
};

export default Resume;