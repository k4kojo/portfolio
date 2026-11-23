import React from 'react';

import './Projects.css';
import Card from './shared/Card';

const Projects = () => {
  return (
    <div className="project-content">
      <p className="section-label">01 / CURRENT PROJECT</p>
      <h2>Your Places</h2>
      <p className="project-description">
        A full-stack place-sharing project with a React frontend and an express
        / MongoDB backend.
      </p>
      <span className="project-status">IN PROGRESS</span>
      <Card>
        <div className="project-snapshot">
          <div className="snapshot-copy">
            <p className="section-label">PROJECT SNAPSHOT</p>
            <p className="snapshot-description">
              A place-sharing web-app exploring the full stack: React UI,
              Express API, MongoDB.
            </p>
            <p className="snapshot-stack">
              React • Node.js • Express • MongoDB
            </p>
            <a
              href="https://github.com/k4kojo/react-project-frontend"
              target="_blank"
              className="snapshot-link"
            >
              GitHub
            </a>
          </div>
          <div className="snapshot-preview">
            <img
              src="https://images.unsplash.com/photo-1791913896369-680a318cc07b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt=""
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Projects;
