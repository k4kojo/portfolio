import React, { type CSSProperties } from 'react';

import './Button.css';

type ButtonProp = {
  name: string;
  style?: CSSProperties;
  inverted?: boolean;
};

const Button = ({ name, style, inverted }: ButtonProp) => {
  return (
    <button className={inverted ? 'button-inverted' : 'button'} style={style}>
      {name}
    </button>
  );
};

export default Button;
