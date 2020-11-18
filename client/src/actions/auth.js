import axios from 'axios';
import {setAlert} from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  UPDATE_PASSWORD,
  UPDATE_FAILED,
  LINK_SENT,
} from './types';
import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/v1/auth/me');

    dispatch({
      type: USER_LOADED,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = (formData, history) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify(formData);

  try {
    const res = await axios.post('/api/v1/auth/register', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());

    dispatch(setAlert('Registration Succcessful', 'success'));
    history.push('/account-overview');
  } catch (error) {
    const msg = error.response.data.error;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (formData, history) => async (dispatch, getState) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify(formData);

  try {
    const res = await axios.post('/api/v1/auth/login', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());

    history.push('/account-overview');
  } catch (error) {
    const msg = error.response.data.error;
    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout / Clear Profile
export const logout = () => (dispatch) => {
  try {
    axios.get('/api/v1/auth/logout');
    dispatch({type: LOGOUT});
  } catch (error) {
    const msg = error.response.data.error;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }
  }

  dispatch({type: LOGOUT});
};

//  Get password reset link
export const getPasswordResetLink = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(
      '/api/v1/auth/forgotPassword',
      formData,
      config
    );

    dispatch({
      type: LINK_SENT,
      payload: res.data,
    });

    dispatch(
      setAlert('Password reset link sent to email address entered', 'success')
    );

    history.push('/forgot-password-message');
  } catch (error) {
    const msg = error.response.data.error;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }
  }

  dispatch({type: LOGIN_FAIL});
};

// // Reset Password
// export const resetPassword = (formData, resettoken, history) => async (
//   dispatch
// ) => {
//   try {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     const res = await axios.put(
//       `/api/v1/auth/resetpassword/${resettoken}`,
//       formData,
//       config
//     );

//     dispatch({
//       type: PASSWORD_CHANGED,
//       payload: res.data,
//     });
//     dispatch(setAlert('Password changed succesfully', 'success'));

//     history.push('/login');
//   } catch (error) {
//     const msg = error.response.data.error;

//     if (msg) {
//       dispatch(setAlert(msg, 'danger'));
//     }
//   }

//   dispatch({type: LOGIN_FAIL});
// };

// // Update User details
// export const updateUserDetails = (formData) => async (dispatch) => {
//   try {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     const res = await axios.put(`/api/v1/auth/updatedetails`, formData, config);

//     dispatch({
//       type: UPDATE_DETAILS,
//       payload: res.data.data,
//     });
//     dispatch(setAlert('Details Updatd succesfully', 'success'));
//   } catch (error) {
//     const msg = error.response.data.error;

//     if (msg) {
//       dispatch(setAlert(msg, 'danger'));
//     }
//   }

//   dispatch({type: UPDATE_FAILED});
// };

// Update password
export const updatePassword = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(
      `/api/v1/auth/updatepassword`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_PASSWORD,
      payload: res.data,
    });

    history.push('/signin');
    dispatch(setAlert('Password Updated', 'success'));
  } catch (error) {
    const msg = error.response.data.error;

    if (msg) {
      dispatch(setAlert(msg, 'danger'));
    }
  }

  dispatch({type: UPDATE_FAILED});
};
