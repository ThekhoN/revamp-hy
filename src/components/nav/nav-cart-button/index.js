import React from 'react';
import SvgIconWrapper from '../../svg-icon-wrapper';
import {NavCartSvgPath} from '../../svg-paths';

const NavCartButton = ({handleOnClick}) => {
  const style={
    float: 'right'
  };
  return (
    <div
      style={style}
      onClick={handleOnClick}>
      <SvgIconWrapper
        width="48"
        height="48"
        viewBox="0 0 48 48"
        title="Homeyantra Navigation Close"
        childPath={<NavCartSvgPath fill="#38afc7"/>}
      />
    </div>
  );
}

export default NavCartButton;
