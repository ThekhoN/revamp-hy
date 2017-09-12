import React from 'react';
import SvgIconWrapper from '../../../svg-icon-wrapper';
import {NavSearchSvgPath} from '../../../svg-paths';

const NavSearch = ({handleOnClick}) => {
  return (
    <div
    className=''
    onClick={handleOnClick}>
      <SvgIconWrapper
        width="48"
        height="48"
        viewBox="0 0 48 48"
        title="Homeyantra Navigation Close"
        childPath={<NavSearchSvgPath fill="#38afc7"/>}
      />
    </div>
  );
}

export default NavSearch;
