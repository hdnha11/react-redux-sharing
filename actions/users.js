import { camelizeKeys } from 'humps';
import * as api from '../api';
import * as types from './types';

export const fetchUsers = params => dispatch => {
  dispatch({
    type: types.FETCH_USERS,
  });

  return api.fetchUsers(params).then(
    response => {
      const { data: users, totalPages } = camelizeKeys(response);

      dispatch({
        type: types.FETCH_USERS_SUCCESS,
        users,
        totalPages,
        currentPage: (params && params.page) || 1,
      });
    },
    error => {
      dispatch({
        type: types.FETCH_USERS_FAIL,
        message: error,
      });
    },
  );
};
