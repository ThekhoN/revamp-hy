import React from 'react';
import NavCategoriesUl from './nav-categories-ul';
import {connect} from 'react-redux';
import './style.css';
import NavMobileCatHeader from '../nav-mobile-cat-header';
import PropTypes from 'prop-types';


const NavCategories = ({mobileView, showSideNav, showMobileCatHeader}) => (
  <div className={`nav-categories__container mobile-side-nav--${showSideNav}`}>
    {showMobileCatHeader && <NavMobileCatHeader />}
    <NavCategoriesUl mobileView={mobileView}/>
  </div>
);

NavCategories.propTypes = {
  mobileView: PropTypes.bool.isRequired,
  showSideNav: PropTypes.bool.isRequired,
  showMobileCatHeader: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  showSideNav: state.mobileUiNav.showSideNav,
  showMobileCatHeader: state.mobileUiNav.showMobileCatHeader
});

export default connect(mapStateToProps, null)(NavCategories);
