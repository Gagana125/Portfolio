import React from "react";
import '../css/Card.css';
import { Link } from "react-router-dom";

const Card = ({ image, title, paragraph, link }) => {
  return (
    <Link to={link} className="card-link">
      <div className="card">
        <div className="card-content">
          <div className="card-left">
            <img src={image} alt="project" className="card-image" />
          </div>
          <div className="card-right">
            <h3>{title}</h3>
            <p>{paragraph}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;