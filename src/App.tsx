import React from 'react';

import Button from './components/shared/Button';

import './App.css';
import HeroLeft from './components/HeroLeft';
import HeroRight from './components/HeroRight';

function App() {
  return (
    <React.Fragment>
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
      </main>
    </React.Fragment>
  );
}

export default App;
