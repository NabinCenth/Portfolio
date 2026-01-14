import React from 'react';
import './Card.css';
import avt from '../avt.png';
import Typewriter from './Typewriter';
import cardBg from '../background.jpg';
function Card() {
  return (
  <div className="card-container" style={ { backgroundImage: `url(${cardBg})` }}>
        
      <div className="photo">
  
        <img src={avt} />
      </div>
      <div className="texts">
        <div className="name">Hi, I'm Nabin</div>
        <div className="role">{<Typewriter/>}</div>
        <div className="description">
          I build modern, responsive web applications using React, JavaScript, and CSS. Passionate about creating clean UI/UX designs.
        </div>
      </div>
    </div>
  );
}

export default Card;
