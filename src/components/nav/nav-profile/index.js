import React from 'react';
import NavAuthdProfileButton from './nav-authd-profile-button';
import './style.css';
import NavAuthUser from './nav-auth-user';
import {connect} from 'react-redux';

const NavProfile = ({authenticated}) => (
  <div className='nav-profile'>
    {authenticated ? <NavAuthdProfileButton /> : <NavAuthUser />}
  </div>
);

const mapStateToProps = (state) => ({
  authenticated: state.userAuth.authenticated
});

export default connect(mapStateToProps, null)(NavProfile);
