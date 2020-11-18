import {
  ADD_ACCOUNT,
  GET_ACCOUNT,
  UPDATE_ACCOUNT,
  DELETE_ACCOUNT,
  ACCOUNT_ERROR,
} from '../actions/types';

const initialState = {
  account: {},
  loading: true,
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case ADD_ACCOUNT:
      return {
        ...state,
        account: payload,
        loading: false,
      };

    case GET_ACCOUNT:
      return {
        ...state,
        account: payload,
        loading: false,
      };
    case UPDATE_ACCOUNT:
      return {
        ...state,
        account: payload,
        loading: false,
      };

    case DELETE_ACCOUNT:
      return {
        ...state,
        account: {},
        loading: false,
      };

    case ACCOUNT_ERROR:
      return {
        ...state,
        accout: {},
        loading: false,
      };

    default:
      return state;
  }
}
