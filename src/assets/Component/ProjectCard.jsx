import React from 'react';
import { Helmet } from 'react-helmet';
import './Project.css';

const ProjectCard = ({ title, description, image, link, category = "WebApplication" }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": title,
    "description": description,
    "url": link,
    "image": image,
    "applicationCategory": category,
    "operatingSystem": "Web",
    "author": {
      "@type": "Person",
      "name": "Nabin Pokharel",
      "alternateName": ["NabinCenth", "Bed Prasad Pokharel"]
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <article className="project-card">
        <div className="card-image-wrapper">
          <img 
            src={image || "https://via.placeholder.com/400x250"} 
            alt={`${title} - Project by Nabin Pokharel`} 
            className="card-image"
            loading="lazy"
          />
        </div>

        <div className="card-content">
          <h3 className="project-title">{title}</h3>
          <p className="project-desc">{description}</p>
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
    </>
  );
};

export default ProjectCard;
