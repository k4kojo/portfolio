import React from 'react';

import Card from './Card';

import './HeroRight.css';

const HeroRight = () => {
  return (
    <div className="hero-right">
      <Card>
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
      </Card>
    </div>
  );
};

export default HeroRight;
