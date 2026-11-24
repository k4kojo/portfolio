import React from 'react';

import Card from './shared/Card';

import './Projects.css';
import { FiCheck, FiClock } from 'react-icons/fi';

type ProjectProps = {
  name: string;
  project_description: string;
  status: string;
  stack: string[];
  image?: string | null;
  repo: string;
};

const dummyProjects: ProjectProps[] = [
  {
    name: 'Job Application Tracker',
    project_description:
      'Track job applications, interviews, and follow-ups in one place.',
    status: 'IN PROGRESS',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    image:
      'https://images.unsplash.com/photo-1772588627342-5ec373e236d8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    repo: 'https://github.com/k4kojo/react-project-frontend',
  },
  {
    name: 'Movie App',
    project_description:
      'Discover popular and trending movies, search titles, and explore detailed movie information.',
    status: 'COMPLETED',
    stack: [
      'React Native',
      'Expo',
      'TypeScript',
      'NativeWind',
      'TMDB API',
      'Appwrite',
    ],
    image: '',
    repo: 'https://github.com/k4kojo/movie-app',
  },
  {
    name: 'Recipe App API',
    project_description:
      'A Node.js backend for saving and managing users’ favorite recipes.',
    status: 'COMPLETED',
    stack: [
      'Node.js',
      'Express 5',
      'Drizzle ORM',
      'Neon Serverless',
      'PostgreSQL',
      'Cron',
    ],
    image: '',
    repo: 'https://github.com/k4kojo/recipe-app',
  },
  {
    name: 'MediConnect API',
    project_description:
      'A role-based healthcare API for appointments, patient and doctor profiles, prescriptions, lab results, and notifications.',
    status: 'COMPLETED',
    stack: [
      'Node.js',
      'Express 5',
      'PostgreSQL',
      'Drizzle ORM',
      'Zod',
      'JWT',
      'Socket.IO',
    ],
    image: '',
    repo: 'https://github.com/k4kojo/healthcare-management-system-api',
  },
];

const Projects = () => (
  <div className="projects">
    <h1 className="section-label">PROJECTS</h1>
    <div className="projects-grid">
      {dummyProjects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  </div>
);

const ProjectCard = ({
  name,
  project_description,
  status,
  stack,
  image,
  repo,
}: ProjectProps) => {
  const imageSrc =
    image && image.trim().length > 0 ? image : '/project-fallback.svg';

  return (
    <div className="project-content">
      <h4>{name}</h4>
      <p className="project-description">{project_description}</p>
      <span
        className={`project-status ${
          status === 'COMPLETED'
            ? 'project-status--completed'
            : 'project-status--in-progress'
        }`}
      >
        {status === 'COMPLETED' ? <FiCheck /> : <FiClock />}
        {status}
      </span>
      <Card>
        <a target="_blank" href={repo} className="project-snapshot">
          <div className="snapshot-preview">
            <img src={imageSrc} alt="" />
          </div>
          <div className="snapshot-copy">
            <p className="snapshot-stack">{stack.join(' • ')}</p>
          </div>
        </a>
      </Card>
    </div>
  );
};

export default Projects;
