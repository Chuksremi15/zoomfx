import axios from 'axios';
import {setAlert} from './alert';
import {
  GET_NOFICATIONS_DEPOSITE,
  GET_NOFICATIONS_WITHDRAWAL,
  GET_NOFICATION_DEPOSITE,
  GET_NOFICATION_WITHDRAWAL,
  NOTIFICATION_ERROR,
  ADD_NOTIFICATION,
  DELETE_NOTIFICATION,
} from './types';

export const getNotification = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/v1/notifications/${id}`);

    dispatch({
      type: GET_NOFICATION_DEPOSITE,
      payload: res.data,
    });
    dispatch({
      type: GET_NOFICATION_WITHDRAWAL,
      payload: res.data,
    });
  } catch (error) {
    const msg = error.response.data.error;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }

    dispatch({
      type: NOTIFICATION_ERROR,
    });
  }
};

export const addNotification = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify(formData);

  try {
    const res = await axios.post('/api/v1/notifications', body, config);

    dispatch({
      type: ADD_NOTIFICATION,
      payload: res.data.data,
    });
  } catch (error) {
    const msg = error.response.data.error;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }

    dispatch({
      type: NOTIFICATION_ERROR,
    });
  }
};

export const deleteNotification = (id) => async (dispatch) => {
  try {
    axios.delete(`/api/v1/notifications/${id}`);

    dispatch({
      type: DELETE_NOTIFICATION,
    });

    dispatch(setAlert('Notification deleted succesfully', 'success'));
  } catch (error) {
    const msg = error.response.data.error;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }

    dispatch({
      type: NOTIFICATION_ERROR,
    });
  }
};
