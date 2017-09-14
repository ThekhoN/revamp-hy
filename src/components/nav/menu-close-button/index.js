import React from 'react';
import SvgIconWrapper from '../../svg-icon-wrapper';
import {NavCloseSvgPath} from '../../svg-paths';

const MenuCloseButton = ({handleOnClick}) => (
  <div
  className='menu-close-button mobile-ui--only align--top-right--abs'
  onClick={handleOnClick}>
    <SvgIconWrapper
      width="48"
      height="48"
      viewBox="0 0 48 48"
      title="Homeyantra Navigation Close"
      childPath={<NavCloseSvgPath fill="#38afc7"/>}
    />
  </div>
);

export default MenuCloseButton;
