import React from 'react';
import SvgIconWrapper from '../../../svg-icon-wrapper';
import {NavSearchSvgPath} from '../../../svg-paths';
import './style.css';

const NavSearchButton = ({handleOnClick}) => {
  return (
    <div
    className='nav-search-button'
    onClick={handleOnClick}>
      <SvgIconWrapper
        width="48"
        height="48"
        viewBox="0 0 48 48"
        title="Homeyantra Navigation Close"
        childPath={<NavSearchSvgPath />}
      />
    </div>
  );
}

export default NavSearchButton;
