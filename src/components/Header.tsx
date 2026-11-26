import React, { useState } from 'react';

import Button from './shared/Button';

import './Header.css';
import { FiCrosshair, FiMenu } from 'react-icons/fi';
import { FaCross } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#">
        Portfolio
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? 'X' : <FiMenu />}
      </button>
      <nav
        id="main-navigation"
        className={menuOpen ? 'navigation navigation--open' : 'navigation'}
        aria-label="Main Navigation"
        onClick={() => setMenuOpen(false)}
      >
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        {!menuOpen && <Button name="LET'S TALK" href="#contact" />}
      </nav>
    </header>
  );
};

export default Header;
