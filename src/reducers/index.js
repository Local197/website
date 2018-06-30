import { combineReducers } from 'redux';
import { getLocale } from './locale';
import { getAuth } from './auth';

export default combineReducers({
  locale: getLocale,
  auth: getAuth
});
