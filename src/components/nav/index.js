import React from 'react';
import NavTop from './nav-top';
import NavCategories from './nav-categories';
import Overlay from '../overlay';
import {connect} from 'react-redux';
import NavMobileSubCatModal from './nav-mobile-sub-cat-modal';
import './style.css';

const Nav = ({mobileView, showOverlay, showNavMobileSubCatModal}) => (
  <nav className='main-nav'>
    <NavTop mobileView={mobileView}/>
    <NavCategories mobileView={mobileView}/>
    <Overlay active={showOverlay}/>
    {showNavMobileSubCatModal ? <NavMobileSubCatModal mobileView={mobileView}/> : null}
  </nav>
);

const mapStateToProps = (state) => ({
  showNavMobileSubCatModal: state.mobileUiNav.showNavMobileSubCatModal,
  showOverlay: state.mobileUiNav.showOverlay
});

export default connect(mapStateToProps, null)(Nav);
