//  action-types
const SHOW_BACK_BUTTON = 'SHOW_BACK_BUTTON';
const SHOW_SUB_CAT_MODAL = 'SHOW_SUB_CAT_MODAL';
const SHOW_SIDE_NAV = 'SHOW_SIDE_NAV';
const SHOW_OVERLAY = 'SHOW_OVERLAY';
const SHOW_MOBILE_CAT_HEADER = 'SHOW_MOBILE_CAT_HEADER';

//  actions
export const showMobileCatHeader = payload => ({
  type: SHOW_MOBILE_CAT_HEADER,
  payload
});
export const showBackButton = payload => ({
  type: SHOW_BACK_BUTTON,
  payload
});
export const showSubCatModal = payload => ({
  type: SHOW_SUB_CAT_MODAL,
  payload
});
export const showSideNav = payload => ({
  type: SHOW_SIDE_NAV,
  payload
});
export const showOverlay = payload => ({
  type: SHOW_OVERLAY,
  payload
});

//  action-creators

//  reducer
export const initialMobileUiNavState = {
  showBackButton: false,
  showNavMobileSubCatModal: false,
  showSideNav: false,
  showOverlay: false,
  showMobileCatHeader: false
}
const mobileUiNav = (state = initialMobileUiNavState, action) => {
  switch (action.type) {
    case SHOW_BACK_BUTTON:
      return {...state, showBackButton: action.payload};
    case SHOW_SUB_CAT_MODAL:
      return {...state, showNavMobileSubCatModal: action.payload};
    case SHOW_SIDE_NAV:
      return {...state, showSideNav: action.payload};
    case SHOW_MOBILE_CAT_HEADER:
      return {...state, showMobileCatHeader: action.payload};
    case SHOW_OVERLAY:
      return {...state, showOverlay: action.payload};
    default:
      return state;
  }
}
export default mobileUiNav;
