import React from 'react';
import './Card.css';
import avt from '../avt.png';
import Typewriter from './Typewriter';
import cardBg from '../background.jpg';

function Card() {
  return (
    <section className="card-container" style={{ backgroundImage: `url(${cardBg})` }}>
      <div className="photo">
        {/* Added alt text and eager loading for LCP performance */}
        <img 
          src={avt} 
          alt="Nabin Pokharel - Full Stack Web Developer" 
          loading="eager" 
          fetchpriority="high"
        />
      </div>
      <div className="texts">
        {/* Changed name to H1 for SEO ranking */}
        <h1 className="name">Hi, I'm Nabin Pokharel</h1>
        
        {/* Typewriter often contains your job title - keep it prominent */}
        <div className="role" aria-live="polite">
          <Typewriter />
        </div>

        <p className="description">
          I build modern, responsive web applications using <strong>React</strong>, <strong>JavaScript</strong>, and <strong>Node.js</strong>. 
          Passionate about creating clean UI/UX designs and high-performance engineering.
        </p>
      </div>
    </section>
  );
}

export default Card;