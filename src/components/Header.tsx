import React from 'react';

import Button from './shared/Button';

const Header = () => {
  return (
    <div className="site-header">
      <a className="brand" href="#">
        Portfolio
      </a>
      <nav aria-label="Main Navigation">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <Button name="LET'S TALK" />
      </nav>
    </div>
  );
};

export default Header;
