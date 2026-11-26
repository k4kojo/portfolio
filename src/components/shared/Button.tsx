import React, { type CSSProperties } from 'react';

import './Button.css';

type ButtonProp = {
  name: string;
  style?: CSSProperties;
  inverted?: boolean;
  href?: string;
  onClick?: () => void;
};

const Button = ({ name, style, inverted, href, onClick }: ButtonProp) => {
  const className = inverted ? 'button button-inverted' : 'button';

  return href ? (
    <a className={className} href={href} style={style}>
      {name}
    </a>
  ) : (
    <button className={className} type="button" style={style} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
