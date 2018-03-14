import { combineReducers } from 'redux';
import * as types from '../actions/types';

const all = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_USERS_SUCCESS:
      return action.currentPage !== 1
        ? [...state, ...action.users]
        : [...action.users];

    case types.FETCH_USERS:
    case types.FETCH_USERS_FAIL:
      return action.currentPage !== 1 ? [...state] : [];

    default:
      return state;
  }
};

const totalPages = (state = 0, action) => {
  switch (action.type) {
    case types.FETCH_USERS_SUCCESS:
      return action.totalPages;

    default:
      return state;
  }
};

const currentPage = (state = 1, action) => {
  switch (action.type) {
    case types.FETCH_USERS_SUCCESS:
      return action.currentPage;

    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_USERS:
      return true;

    case types.FETCH_USERS_SUCCESS:
    case types.FETCH_USERS_FAIL:
      return false;

    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case types.FETCH_USERS_FAIL:
      return action.message;

    case types.FETCH_USERS:
    case types.FETCH_USERS_SUCCESS:
      return null;

    default:
      return state;
  }
};

const users = combineReducers({
  all,
  currentPage,
  totalPages,
  isFetching,
  errorMessage,
});

export default users;
