import axios from 'axios';
import {setAlert} from './alert';
import {
  ADD_ACCOUNT,
  GET_ACCOUNT,
  DELETE_ACCOUNT,
  UPDATE_ACCOUNT,
  ACCOUNT_ERROR,
} from './types';

export const addAccount = (formData, history) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify(formData);

  try {
    const res = await axios.post('/api/v1/accounts', body, config);

    dispatch({
      type: ADD_ACCOUNT,
      payload: res.data.data,
    });

    dispatch(setAlert('Account Added', 'success'));
    history.push('/profile');
  } catch (error) {
    const msg = error.response.data.error;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }

    dispatch({
      type: ACCOUNT_ERROR,
    });
  }
};

export const editAccount = (formData, id, history) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify(formData);

  try {
    const res = await axios.put(`/api/v1/accounts/${id}`, body, config);

    dispatch({
      type: UPDATE_ACCOUNT,
      payload: res.data.data,
    });

    dispatch(setAlert('Account Update', 'success'));
    history.push('/profile');
  } catch (error) {
    const msg = error.response.data.error;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }

    dispatch({
      type: ACCOUNT_ERROR,
    });
  }
};

export const getAccount = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/v1/accounts/useraccount');

    dispatch({
      type: GET_ACCOUNT,
      payload: res.data.data,
    });
  } catch (error) {
    const msg = error.response.data.error;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }

    dispatch({
      type: ACCOUNT_ERROR,
    });
  }
};
export const getAccountById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/v1/accounts/user/${id}`);

    dispatch({
      type: GET_ACCOUNT,
      payload: res.data.data,
    });
  } catch (error) {
    const msg = error.response.data.error;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }

    dispatch({
      type: ACCOUNT_ERROR,
    });
  }
};

export const deleteAccount = (id, history) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/v1/accounts/${id}`);

    dispatch({
      type: DELETE_ACCOUNT,
      payload: res.data,
    });

    dispatch(setAlert('Account Deleted', 'success'));
    history.push('/profile');
  } catch (error) {
    const msg = error.response.data.error;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }

    dispatch({
      type: ACCOUNT_ERROR,
    });
  }
};
