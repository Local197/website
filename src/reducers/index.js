import { combineReducers } from 'redux';
import { getLocale } from './locale';

export default combineReducers({
  locale: getLocale,
});
