import React from 'react';
import './style.css';
const BrandLogoText = ({width, height, fontSize}) => (
  <div
  className='brand-logo__text'
  style={{
    width: `${width} px`,
    height: `${height} px`,
    fontSize: `${fontSize} px`
  }}>
    <span className='text--color-brand-dark-blue'>Home</span>
    <span className='text--color-brand-light-blue'>Yantra</span>
  </div>
);

export default BrandLogoText;
