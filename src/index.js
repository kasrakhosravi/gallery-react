/**
 * Global Dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

/**
 * Global styles
 */
import './index.css';

/**
 * Routes
 */
import createRoutes from './routes';

/**
 * Store
 */
import store from './store';

/**
 * Create history (synced with store)
 */
const history = syncHistoryWithStore(hashHistory, store);

/**
 * Create routes
 */
const routes = createRoutes({ history });

/**
 * Render app
 */
ReactDOM.render(
    <Provider store={store}>
      {routes}
    </Provider>,
  document.getElementById('root')
);
