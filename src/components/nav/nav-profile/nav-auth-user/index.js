import React from 'react';
import NavUnauthdProfileButton from '../nav-unauthd-profile-button';
import './style.css';

const NavAuthUser = () => (
  <div className='nav-auth-user'>
    <a href='' className='desktop-large-ui--only-inline-block' >Sign up  </a>
    <a href='' className='desktop-large-ui--only-inline-block'>Log in </a>
    <div className='mobile-ui-large--only'>
      <NavUnauthdProfileButton />
    </div>
  </div>
);

export default NavAuthUser;
