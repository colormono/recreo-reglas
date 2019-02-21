import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import timbreReducer from './timbreReducer';

export default combineReducers({
  timbre: timbreReducer,
  form: reduxForm,
  auth: authReducer
});
