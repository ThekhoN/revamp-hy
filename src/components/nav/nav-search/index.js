import React from 'react';
import NavSearchButton from './nav-search-button';

const NavSearch = () => {
  const style = {
    float: 'right'
  };
  return (
    <div
      style={style}
      className='nav-search__container'>
      <NavSearchButton />
    </div>
  );
}

export default NavSearch;
