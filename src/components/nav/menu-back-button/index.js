import React from 'react';
import SvgIconWrapper from '../../svg-icon-wrapper';
import {NavBackSvgPath} from '../../svg-paths';

const MenuBackButton = ({handleOnClick, alignTo = 'left'}) => {
  const style = {
    top: '0px',
    [alignTo]: '0px'
  };
  return (
    <div
    className='mobile-ui--only pos--absolute'
    style={style}
    onClick={handleOnClick}>
      <SvgIconWrapper
        width="48"
        height="48"
        viewBox="0 0 48 48"
        title="Homeyantra Navigation Close"
        childPath={<NavBackSvgPath fill="#38afc7"/>}
      />
    </div>
  );
}

export default MenuBackButton;
