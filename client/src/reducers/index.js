import {combineReducers} from 'redux';
import alert from './alert';
import auth from './auth';
import account from './account';
import plans from './plans';
import admin from './admin';
import notifications from './notifications';

export default combineReducers({
  alert,
  auth,
  account,
  plans,
  admin,
  notifications,
});
