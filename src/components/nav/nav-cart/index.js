import React from 'react';
import NavCartButton from './nav-cart-button';
import './style.css';

const NavCart = () => (
  <div className='nav-cart'>
    <NavCartButton />
    <span
      className='desktop-ui--only nav-cart-label'
      >
      <span className='desktop-large-ui--only-inline-block'>Cart</span> 0 </span>
  </div>
);

export default NavCart;
