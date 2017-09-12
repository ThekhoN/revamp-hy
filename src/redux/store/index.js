import {createStore, combineReducers, compose} from 'redux';
import mobileUiNav from '../mobile-ui-nav';
import navCategoryLinks from '../nav-category-links';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  mobileUiNav,
  navCategoryLinks
});

const store = createStore(rootReducer, composeEnhancers());

export default store;
