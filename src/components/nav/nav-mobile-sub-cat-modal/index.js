import React from 'react';
import './style.css';
import NavMobileSubCatHeader from '../nav-mobile-sub-cat-header';
import {navCategories} from '../../../redux/nav-category-links';
import {connect} from 'react-redux';

const NavMobileSubCatModal = ({mobileView, categoryKey}) => {
  const activeCategoryArr = navCategories.filter(e => e.key === categoryKey);
  return (
    mobileView && (<div className='nav-mobile__modal z-index--2'>
      <NavMobileSubCatHeader />
      <ul className='nav-categories__ul width--full border__reset--0'>
        {
          activeCategoryArr[0].subCategories.map(e => (
            <li
              key={e.key}
              className='nav-categories__li'>
              {e.name}
            </li>
          ))
        }
      </ul>
    </div>)
  );
}

const mapStateToProps = (state) => ({
  categoryKey: state.navCategoryLinks.categoryKey
});

export default connect(mapStateToProps, null)(NavMobileSubCatModal);
