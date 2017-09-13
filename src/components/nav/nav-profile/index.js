import React from 'react';
import NavAuthdProfileButton from './nav-authd-profile-button';
import './style.css';
import {connect} from 'react-redux';
import NavAuthUser from './nav-auth-user';

const NavProfile = ({authenticated}) => (
  <div className='nav-profile'>
    {authenticated ? <NavAuthdProfileButton /> : <NavAuthUser />}
  </div>
);

const mapStateToProps = (state) => ({
  authenticated: state.userAuth.authenticated
});

export default NavProfile;
