import React from 'react';

import './App.css';

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
          <button className="contact">LET'S TALK</button>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="hero-left">
            <h4>JUNIOR REACT & FULL-STACK JAVASCRIPT DEVELOPER</h4>
            <p>Hi, I'm Sylvester.</p>
            <h1 className="hero-description">
              I build web apps <br /> from interface <br />
              <span>to API</span>.
            </h1>
            <p>
              Thoughtful React experiences, backend by Node.js,
              <br /> Express, and MongoDB. Learning by building end to end.
            </p>
          </div>
          <div className="hero-right">
            <h5>BUILDING ACROSS THE STACK</h5>
            <div>
              <ul>
                <li>
                  <p>01</p>
                  <div>
                    <p className="label">INTERFACE</p>
                    <p>React / Javascript / Typescript</p>
                  </div>
                </li>
                <li>
                  <p>02</p>
                  <div>
                    <p className="label">SERVER</p>
                    <p>Node.js / Express</p>
                  </div>
                </li>
                <li>
                  <p>03</p>
                  <div>
                    <p className="label">DATA</p>
                    <p>MongoDB / Mongoose</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
