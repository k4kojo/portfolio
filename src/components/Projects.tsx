import React from 'react';

import './Projects.css';
import Card from './Card';

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
            <h3>Your Places</h3>
            <p className="snapshot-description">
              A place-sharing web-app exploring the full stack: React UI,
              Express API, MongoDB.
            </p>
            <p className="snapshot-stack">
              React • Node.js • Express • MongoDB
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Projects;
