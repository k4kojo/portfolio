import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I build responsive React interfaces and full-stack apps with Node.js
          and Express.
        </p>
      </section>
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Responsive React interfaces</li>
          <li>Full-stack development</li>
          <li>Node.js and Express</li>
        </ul>
      </section>
      <section className="upcoming-projects">
        <h2>Upcoming Projects</h2>
        <ul>
          <li>Job Application Tracker</li>
        </ul>
      </section>
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <ul>
          <li>
            <a href="https://github.com/k4kojo">GitHub</a>
          </li>
          <li>
            <a href="mailto:mintahsylvesterkojo@gmail.com">
              mintahsylvesterkojo@gmail.com
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
