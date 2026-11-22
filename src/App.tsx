import React from 'react';

import Button from './components/shared/Button';

import './App.css';
import HeroLeft from './components/HeroLeft';
import HeroRight from './components/HeroRight';
import Card from './components/Card';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <header className="site-header">
        <a className="brand" href="#">
          Portfolio
        </a>
        <nav aria-label="Main Navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <Button name="LET'S TALK" />
        </nav>
      </header>
      <main>
        <section className="hero">
          <HeroLeft />
          <HeroRight />
        </section>
        <section className="projects">
          <Projects />
        </section>
      </main>
    </div>
  );
}

export default App;
