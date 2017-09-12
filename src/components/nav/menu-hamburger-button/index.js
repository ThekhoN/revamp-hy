import React from 'react';
import SvgIconWrapper from '../../svg-icon-wrapper';
import {NavHamburgerSvgPath} from '../../svg-paths';

const MenuHamburgerButton = ({handleOnClick}) => (
  <div className='float--left mobile-ui--only' onClick={handleOnClick}>
    <SvgIconWrapper
      width="48"
      height="48"
      viewBox="0 0 48 48"
      title="Homeyantra Navigation Menu"
      childPath={<NavHamburgerSvgPath fill="#38afc7"/>}
    />
  </div>
);

export default MenuHamburgerButton;
