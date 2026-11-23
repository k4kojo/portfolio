import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

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
          <li>AI Customer Support Copilot</li>
          <li>AI Document Intelligence & Workflow Automation Platform</li>
        </ul>
      </section>
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <ul>
          <li>
            <a target="_blank" href="https://github.com/k4kojo">
              <FaGithub aria-hidden="true" />
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="mailto:mintahsylvesterkojo@gmail.com"
              aria-label="Email me"
            >
              <FiMail aria-hidden="true" />
              Email
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sylvester-mintah-978908286/"
            >
              <FaLinkedin aria-hidden="true" />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://instagram.com/k_4kojo"
              aria-label="Email me"
            >
              <FaInstagram aria-hidden="true" />
              Instagram
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
