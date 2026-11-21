import React from 'react';

import Button from './shared/Button';

import './HeroLeft.css';

const HeroLeft = () => {
  return (
    <div className="hero-left">
      <h4>JUNIOR REACT & FULL-STACK JAVASCRIPT DEVELOPER</h4>
      <p>Hi, I'm Sylvester.</p>
      <h1 className="hero-description">
        I build web apps <br /> from interface <br />
        <span>to API.</span>
      </h1>
      <p>
        Thoughtful React experiences, backend by Node.js,
        <br /> Express, and MongoDB. Learning by building end to end.
      </p>
      <div className="hero-actions">
        <Button name="SEE SELECTED WORK" />
        <Button name="Contact" inverted />
      </div>
    </div>
  );
};

export default HeroLeft;
