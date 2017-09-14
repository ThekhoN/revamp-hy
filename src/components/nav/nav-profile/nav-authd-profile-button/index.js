import React from 'react';
import './style.css';

const NavProfileSvgAuthd = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    aria-labelledby="title">
    <title id='title'>User Profile</title>
    <path fill='none' d="M24 15.9c-4.5 0-8.1 3.7-8.1 8.1 0 2.8 1.4 5.2 3.5 6.7.3-2.8 1.4-5.6 4.6-5.6 3.2 0 4.3 2.8 4.6 5.5 2.1-1.5 3.4-3.9 3.4-6.6.1-4.5-3.5-8.1-8-8.1zm0 8.3c-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7 2.7 1.2 2.7 2.7-1.2 2.7-2.7 2.7z"/>
    <circle class='filled-path' cx="24" cy="21.5" r="2.7"/>
    <path class='filled-path' d="M24 13.8c-5.6 0-10.2 4.6-10.2 10.2S18.4 34.2 24 34.2 34.2 29.6 34.2 24 29.6 13.8 24 13.8zm-1 19.3l-1.8-2 .9-.8 1 1.1 2.8-2.5.8.9-3.7 3.3zm5.7-2.5c-.3-2.7-1.5-5.5-4.6-5.5-3.2 0-4.3 2.8-4.6 5.6-2.1-1.5-3.5-3.9-3.5-6.7 0-4.5 3.6-8.1 8.1-8.1s8.1 3.6 8.1 8.1c-.1 2.7-1.5 5.2-3.5 6.6z"/>
  </svg>
);

const NavAuthdProfileButton = ({handleOnClick}) => {
  return (
    <div
      className='nav-profile-button'
      onClick={handleOnClick}>
      <span
        className='svg-icon-wrapper nav-profile-icon__wrapper'>
        <NavProfileSvgAuthd />
      </span>
      <span className='nav-profile-label--baseline desktop-large-ui--only-inline-block'>
        My Account
      </span>
    </div>
  );
}

export default NavAuthdProfileButton;
