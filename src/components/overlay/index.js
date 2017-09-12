import React from 'react';
import './style.css';

const Overlay = ({active}) => (
  <div className={`overlay z-index--2 overlay-active-${active}`}>
  </div>
);

export default Overlay;
