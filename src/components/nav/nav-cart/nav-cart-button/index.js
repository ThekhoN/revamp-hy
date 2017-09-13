import React from 'react';
import SvgIconWrapper from '../../../svg-icon-wrapper';
import {NavCartSvgPath} from '../../../svg-paths';
import './style.css';

const NavCartButton = ({handleOnClick}) => {
  return (
    <div
      className='nav-cart-button'
      onClick={handleOnClick}>
      <SvgIconWrapper
        width="48"
        height="48"
        viewBox="0 0 48 48"
        title="Homeyantra Navigation Close"
        childPath={<NavCartSvgPath />}
      />
    </div>
  );
}

export default NavCartButton;
