import {GET_USERS, GET_USER, ADMIN_ERROR} from '../actions/types';

const initialState = {
  userLoading: true,
  usersLoading: true,
  user: {},
  users: {},
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        usersLoading: false,
      };

    case GET_USER:
      return {
        ...state,
        user: payload,
        userLoading: false,
      };

    case ADMIN_ERROR:
      return {
        ...state,
        user: {},
        users: {},
        usersLoading: false,
        userLoading: false,
      };

    default:
      return state;
  }
}
