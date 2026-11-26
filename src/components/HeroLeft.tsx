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
        Thoughtful React experiences, backed by Node.js, Express, and MongoDB.
        Learning by building end to end.
      </p>
      <div className="hero-actions">
        <Button name="SEE SELECTED WORK" href="#projects" />
        <Button name="Contact" href="#contact" inverted />
      </div>
      <div className="core-toolkit">
        <h5>CORE TOOLKIT</h5>
        <ul>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>React</li>
          <li>React Native</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>Postgres</li>
          <li>Rest APIs</li>
          <li>Git / Github</li>
        </ul>
      </div>
    </div>
  );
};

export default HeroLeft;
