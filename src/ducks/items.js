/**
 * General Dependencies
 */
import { flow } from 'lodash';

/**
 * Services
 */
import * as api from '../services/api';

/**
 * Feature Name
 */
export const NAME = `@itemdata`;
export const POPULATE_ITEMS_PENDING = `${NAME}/POPULATE_ITEMS_PENDING`;
export const POPULATE_ITEMS_SUCCESS = `${NAME}/POPULATE_ITEMS_SUCCESS`;
export const POPULATE_ITEMS_ERROR = `${NAME}/POPULATE_ITEMS_ERROR`;
export const CHANGE_IMAGES_LOAD_STATUS = `${NAME}/CHANGE_IMAGES_LOAD_STATUS`;

/**
 * Initial state
 */
const initialState = {
  isInitiallyLoaded: false,
  areImagesLoading: true,
  items: [],
  error: null,
};

/**
 * Selectors
 */
export const getState = (state) => state[NAME];
export const getItems = flow(getState, (state) => state.items);
export const getError = flow(getState, (state) => state.error);
export const getInitialLoadStatus = flow(getState, (state) => state.isInitiallyLoaded);
export const getImagesLoadingStatus = flow(getState, (state) => state.areImagesLoading);

/**
 * Action creators
 */
function populateItemsPending() {
  return {
    type: POPULATE_ITEMS_PENDING,
  }
}

function populateItemsSuccess({ items }) {
  return {
    type: POPULATE_ITEMS_SUCCESS,
    items,
  }
}

function populateItemsError({ error }) {
  return {
    type: POPULATE_ITEMS_ERROR,
    error
  }
}

export function changeImagesLoadStatus(loadStatus) {
  return {
    type: CHANGE_IMAGES_LOAD_STATUS,
    loadStatus
  }
}

/**
 * Thunk (action creator)
 */
export function populateItems() {
  return (dispatch) => {
    dispatch(populateItemsPending());

    return api.
    getItems()
    .then((items) => dispatch(populateItemsSuccess({ items })))
    .catch((error) => dispatch(populateItemsError({ error: error.message })));
  }
}


/**
 * Root Reducer
 */
export default function reducer(state = initialState, action = {}) {

  switch (action.type) {
    case POPULATE_ITEMS_PENDING:
    return {
      ...state,
      isInitiallyLoaded: false,
    };

    case POPULATE_ITEMS_SUCCESS:
    return {
      ...state,
      isInitiallyLoaded: true,
      items: action.items,
    };

    case POPULATE_ITEMS_ERROR:
    return {
      ...state,
      error: action.error,
    };

    case CHANGE_IMAGES_LOAD_STATUS:
      return {
        ...state,
        areImagesLoading: !action.loadStatus,
      };

    default:
    return state;
  }
}
