import {
  GET_NOFICATIONS_DEPOSITE,
  GET_NOFICATIONS_WITHDRAWAL,
  GET_NOFICATION_DEPOSITE,
  GET_NOFICATION_WITHDRAWAL,
  NOTIFICATION_ERROR,
  ADD_NOTIFICATION,
  DELETE_NOTIFICATION,
} from '../actions/types';

const initialState = {
  notification: {},
  depositeNotifications: {},
  depositeNotification: {},
  withdrawalNotifications: {},
  withdrawalNotification: {},
  notificationsLoading: true,
  notificationLoading: true,
  loading: true,
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case ADD_NOTIFICATION:
      return {
        ...state,
        notification: payload,
        loading: false,
      };

    case GET_NOFICATIONS_DEPOSITE:
      return {
        ...state,
        depositeNotifications: payload.data.filter(
          (notification) => notification.type === 'Deposite'
        ),
        notificationsLoading: false,
      };

    case GET_NOFICATIONS_WITHDRAWAL:
      return {
        ...state,
        withdrawalNotifications: payload.data.filter(
          (notification) => notification.type === 'Withdrawal'
        ),
        notificationsLoading: false,
      };

    case GET_NOFICATION_WITHDRAWAL:
      return {
        ...state,
        withdrawalNotification: payload.data.filter(
          (notification) => notification.type === 'Withdrawal'
        ),
        notificationLoading: false,
      };

    case GET_NOFICATION_DEPOSITE:
      return {
        ...state,
        depositeNotification: payload.data.filter(
          (notification) => notification.type === 'Deposite'
        ),
        notificationLoading: false,
      };
    case DELETE_NOTIFICATION:
      return {
        ...state,
        notificationLoading: false,
      };

    case NOTIFICATION_ERROR:
      return {
        ...state,
        depositeNotifications: {},
        depositeNotification: {},

        withdrawalNotifications: {},
        withdrawalNotification: {},
        notificationsLoading: false,
        notificationLoading: false,
      };

    default:
      return state;
  }
}
