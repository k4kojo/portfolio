import React from 'react';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';
import Projects from './Projects';

import './Main.css';

const Main = () => {
  return (
    <main>
      <section className="hero">
        <HeroLeft />
        <HeroRight />
      </section>
      <section id="projects" className="projects">
        <Projects />
      </section>
    </main>
  );
};

export default Main;
