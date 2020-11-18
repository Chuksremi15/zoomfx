import axios from 'axios';
import {setAlert} from './alert';
import {GET_USER, GET_USERS, ADMIN_ERROR} from './types';

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/v1/users');

    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (error) {
    const msg = error.response.data.error;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }

    dispatch({
      type: ADMIN_ERROR,
    });
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/v1/users/${id}`);

    dispatch({
      type: GET_USER,
      payload: res.data.data,
    });
  } catch (error) {
    const msg = error.response.data.error;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }

    dispatch({
      type: ADMIN_ERROR,
    });
  }
};
