import React from 'react';
import BrandLogoText from '../../brand-logo-text';
import MenuCloseButton from '../menu-close-button';
import './style.css';
import {connect} from 'react-redux';
import {showSideNav} from '../../../redux/mobile-ui-nav';

const NavMobileCatHeader = ({handleCloseSideNav}) => (
  <div className='nav__top bg--white mobile-ui--only' style={{
    boxShadow: '0px 2px 5px 0px rgba(50, 50, 50, 0.15)',
    position: 'relative'
  }}>
    <div className='left--20px pos--relative'>
      <BrandLogoText />
    </div>
    <MenuCloseButton
      handleOnClick={() => {
        handleCloseSideNav(false);
      }} />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  handleCloseSideNav: (bool) => {
    dispatch(showSideNav(bool))
  }
});


export default connect(null, mapDispatchToProps)(NavMobileCatHeader);
