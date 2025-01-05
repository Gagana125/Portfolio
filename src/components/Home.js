import React from 'react';
import './css/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content" >
        {/* <div className='home-img-container'>
          <img className='home-img' src="./assets/bg1.jpg" alt="" />
        </div> */}
        <div className="home-text">
        <h1>Gagana Samarasekara</h1>
        <p>Computer Science Undergraduate looking for a Software Engineer position</p>
        {/* <Link to={'/contact'} style={{textDecoration: 'none'}} className="about-btn">Hire Me</Link> */}
        </div>
        
        {/* <button className="about-btn">Hire Me</button> */}
      </div>
    </section>
  );
};

export default Home;
