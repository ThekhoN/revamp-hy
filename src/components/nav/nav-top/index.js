import React from 'react';
import BrandLogoText from '../../brand-logo-text';
import './style.css';
import MenuHamburgerButton from '../menu-hamburger-button';
import {connect} from 'react-redux';
import {showSubCatModal, showSideNav, showMobileCatHeader} from '../../../redux/mobile-ui-nav';
import NavSearch from '../nav-search';
import NavCartButton from '../nav-cart-button';

const NavTop = ({handleToggleShowSideNav, handleToggleShowMobileCatHeader}) => (
  <div className='nav__top bg--white pos--relative z-index--2'>
  <MenuHamburgerButton handleOnClick={() => {
      handleToggleShowSideNav(true);
      handleToggleShowMobileCatHeader(true);
    }}/>
    <BrandLogoText
      widh='300'
      height='20'
      fontSize='14'
    />
    <NavCartButton />
    <NavSearch />

  </div>
);

const mapStateToProps = (state) => ({
  showSubCatModal: state.mobileUiNav.showSubCatModal,
  showBackButton: state.mobileUiNav.showBackButton,
  showSideNav: state.mobileUiNav.showSideNav
});
const mapDispatchToProps = (dispatch) => ({
  handleToggleShowSideNav: (bool) => {
    dispatch(showSideNav(bool));
  },
  handleToggleShowNavMobileSubCatModal: (bool) => {
    dispatch(showSubCatModal(bool));
  },
  handleToggleShowMobileCatHeader: (bool) => {
    dispatch(showMobileCatHeader(bool));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(NavTop);
