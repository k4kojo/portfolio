import React, { type ReactNode } from 'react';

import './Card.css';

type CardProps = {
  children: ReactNode;
};
const Card = ({ children }: CardProps) => {
  return <div className="card">{children}</div>;
};

export default Card;
