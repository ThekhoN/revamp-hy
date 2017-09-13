import React from 'react';
import BrandLogoText from '../../brand-logo-text';
import './style.css';
import MenuHamburgerButton from '../menu-hamburger-button';
import {connect} from 'react-redux';
import {showSubCatModal, showSideNav, showMobileCatHeader, showOverlay} from '../../../redux/mobile-ui-nav';
import NavSearch from '../nav-search';
import NavCart from '../nav-cart';
import NavProfile from '../nav-profile';
import NavCustomerCare from '../nav-customer-care';

const NavTop = ({
  handleToggleShowSideNav,
  handleToggleShowMobileCatHeader,
  handleToggleShowOverlay
}) => (
  <div className='nav__top bg--white pos--relative z-index--2'>
  <MenuHamburgerButton handleOnClick={() => {
      handleToggleShowSideNav(true);
      handleToggleShowMobileCatHeader(true);
      handleToggleShowOverlay(true);
    }}/>
    <BrandLogoText />
    <NavCustomerCare />
    <NavProfile />
    <NavCart />
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
  },
  handleToggleShowOverlay: (bool) => {
    dispatch(showOverlay(bool));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(NavTop);
