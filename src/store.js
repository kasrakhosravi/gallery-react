/**
 * Global dependencies
 */
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

/**
 * Import root reducer
 */
import rootReducer from './root-reducer';

/**
 * Create the store with middleware
 */
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

/**
 * Export store
 */
export default store;
