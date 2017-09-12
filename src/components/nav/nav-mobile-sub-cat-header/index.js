import React from 'react';
import MenuBackButton from '../menu-back-button';
import './style.css';
import {connect} from 'react-redux';
import {showSideNav, showSubCatModal} from '../../../redux/mobile-ui-nav';
import {navCategories} from '../../../redux/nav-category-links';

const NavMobileSubCatHeader = ({handleCloseSideNav, handleToggleShowNavMobileSubCatModal, categoryKey}) => {
  const categoryName = navCategories.filter(e => e.key === categoryKey)[0].name;
  return (
    <div className='nav__top bg--white mobile-ui--only' style={{
      boxShadow: '0px 2px 5px 0px rgba(50, 50, 50, 0.15)',
      position: 'relative'
    }}>
      <div className='nav-mobile-sub-cat-title'>
        {categoryName}
      </div>
      <MenuBackButton
        handleOnClick={() => {
          handleCloseSideNav(false);
          handleToggleShowNavMobileSubCatModal(false);
        }} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  categoryKey: state.navCategoryLinks.categoryKey
});

const mapDispatchToProps = (dispatch) => ({
  handleCloseSideNav: (bool) => {
    dispatch(showSideNav(bool))
  },
  handleToggleShowNavMobileSubCatModal: (bool) => {
    dispatch(showSubCatModal(bool));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(NavMobileSubCatHeader);
