import React from 'react';
import './Project.css';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <article className="project-card">
      <div className="card-image-wrapper">
        <img 
          src={image || "https://via.placeholder.com/400x250"} 
          alt={title} 
          className="card-image" 
        />
      </div>
      
      <div className="card-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">
          {description}
        </p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="view-btn"
        >
          View Project
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;