import axios from 'axios';
import {setAlert} from './alert';

import {
  GET_PLAN,
  GET_PLANS,
  GET_PLANS_ACTIVEPLANS,
  GET_PLANS_PAIDDEPOSITE,
  GET_PLANS_DUEPLANS,
  GET_PLANS_PAIDWITHDRAWAL,
  GET_PLANS_PENDINGPLANS,
  ADD_PLAN,
  UPDATE_PLAN,
  PLAN_ERROR,
  DELETE_PLAN,
  GET_PLANS_PENDINGWITHDRAWALS,
  UPDATE_PENDING_WITHDRAWAL,
} from './types';

export const addPlan = (formData, history) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify(formData);

  try {
    const res = await axios.post('/api/v1/plans', body, config);

    dispatch({
      type: ADD_PLAN,
      payload: res.data.data,
    });

    dispatch(setAlert('Investment Request Receive', 'success'));
    history.push('/deposite-request');
  } catch (error) {
    const msg = error.response.data.error;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }

    dispatch({
      type: PLAN_ERROR,
    });
  }
};

export const updatePendingWithdrawal = (
  formData,
  id,
  history,
  cancelWithdrawal
) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify(formData);

  try {
    const res = await axios.put(`/api/v1/plans/${id}`, body, config);

    dispatch({
      type: UPDATE_PENDING_WITHDRAWAL,
      payload: res.data.data,
    });

    if (cancelWithdrawal) {
      dispatch(setAlert('Withdrawal request cancled', 'success'));
      history.push('/account-overview');
    } else {
      dispatch(setAlert('Withdrawal updated to pending', 'success'));

      history.push('/withdraw-request');
    }
  } catch (error) {
    const msg = error.response.data.error;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }

    dispatch({
      type: PLAN_ERROR,
    });
  }
};
export const updatePlan = (formData, id) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify(formData);

  try {
    const res = await axios.put(`/api/v1/plans/${id}`, body, config);

    dispatch({
      type: UPDATE_PLAN,
      payload: res.data.data,
    });

    dispatch(setAlert('Plan Updated', 'success'));
  } catch (error) {
    const msg = error.response.data.error;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }

    dispatch({
      type: PLAN_ERROR,
    });
  }
};

export const getUserPlans = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/v1/auth/plans');

    dispatch({
      type: GET_PLANS,
      payload: res.data,
    });

    dispatch({
      type: GET_PLANS_PENDINGPLANS,
      payload: res.data,
    });
    dispatch({
      type: GET_PLANS_ACTIVEPLANS,
      payload: res.data,
    });
    dispatch({
      type: GET_PLANS_DUEPLANS,
      payload: res.data,
    });
    dispatch({
      type: GET_PLANS_PAIDDEPOSITE,
      payload: res.data,
    });
    dispatch({
      type: GET_PLANS_PAIDWITHDRAWAL,
      payload: res.data,
    });
    dispatch({
      type: GET_PLANS_PENDINGWITHDRAWALS,
      payload: res.data,
    });
  } catch (error) {
    const msg = error.response.data.error;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }

    dispatch({
      type: PLAN_ERROR,
    });
  }
};
export const getUserPlansById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/v1/plans/user/${id}`);

    dispatch({
      type: GET_PLANS,
      payload: res.data.data,
    });
  } catch (error) {
    const msg = error.response.data.error;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }

    dispatch({
      type: PLAN_ERROR,
    });
  }
};

export const getPlan = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/v1/plans/${id}`);

    dispatch({
      type: GET_PLAN,
      payload: res.data.data,
    });
  } catch (error) {
    const msg = error.response.data.error;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }

    dispatch({
      type: PLAN_ERROR,
    });
  }
};

export const deletePlan = (id, history, admin) => async (dispatch) => {
  try {
    axios.delete(`/api/v1/plans/${id}`);

    dispatch({
      type: DELETE_PLAN,
    });

    dispatch(setAlert('Investment plan deleted succesfully', 'success'));

    if (admin) {
      history.push('/admin');
    } else {
      history.push('/account-overview');
    }
  } catch (error) {
    const msg = error.response.data.error;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }

    dispatch({
      type: PLAN_ERROR,
    });
  }
};
