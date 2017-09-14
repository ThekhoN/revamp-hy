import React from 'react';
import './style.css';
import {
	showSubCatModal,
	showBackButton,
	showMobileCatHeader,
	showSideNav,
	showOverlay
} from '../../../../redux/mobile-ui-nav';
import { connect } from 'react-redux';
import { navCategories } from '../../../../redux/nav-category-links';
import { getCurrentModalCat } from '../../../../redux/nav-category-links';

const NavCategoriesUl = ({
	mobileView,
	showNavMobileSubCatModal,
	showSideNav,
	handleToggleShowNavMobileSubCatModal,
	handleToggleShowBackButton,
	handleToggleShowMobileCatHeader,
	handleToggleShowSideNav,
	handleGetCurrentModalCat,
	handleToggleShowOverlay
}) => (
	<ul className="nav-categories__ul">
		{navCategories.map(e => {
			return (
				<li
					className="nav-categories__li"
					key={e.key}
					onClick={() => {
						handleGetCurrentModalCat(e.key);
						handleToggleShowNavMobileSubCatModal(!showNavMobileSubCatModal);
						handleToggleShowBackButton(true);
						handleToggleShowMobileCatHeader(false);
						handleToggleShowSideNav(false);
						handleToggleShowOverlay(false);
					}}
				>
					{e.name}
					<ul className="nav-categories-inner__ul">
						{e.subCategories.map(e => (
							<li className="nav-sub-categories__li" key={e.key}>
								<a href={e.link}>{e.name}</a>
							</li>
						))}
					</ul>
				</li>
			);
		})}
	</ul>
);

const mapStateToProps = state => ({
	showSideNav: state.mobileUiNav.showSideNav
});
const mapDispatchToProps = dispatch => ({
	handleToggleShowNavMobileSubCatModal: bool => {
		dispatch(showSubCatModal(bool));
	},
	handleToggleShowBackButton: bool => {
		dispatch(showBackButton(bool));
	},
	handleToggleShowSideNav: bool => {
		dispatch(showSideNav(bool));
	},
	handleToggleShowMobileCatHeader: bool => {
		dispatch(showMobileCatHeader(bool));
	},
	handleGetCurrentModalCat: payload => {
		dispatch(getCurrentModalCat(payload));
	},
	handleToggleShowOverlay: bool => {
		dispatch(showOverlay(bool));
	}
});
export default connect(mapStateToProps, mapDispatchToProps)(NavCategoriesUl);
