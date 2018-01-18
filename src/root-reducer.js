/**
 * Dependencies
 */
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

/**
 * Import reducers / features
 */
import itemsReducer, { NAME as itemsStateName } from './ducks/items';

/**
 * Create combined reducer
 */
export default combineReducers({
  [itemsStateName]: itemsReducer,
  routing,
});
