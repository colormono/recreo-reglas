import axios from 'axios';
import {
  FETCH_KITTENS,
  GENERATE_PATTERN,
  FETCH_PATTERN,
  CHANGE_AUTH
} from './types';

export const fetchKittens = () => async dispatch => {
  const res = await axios.get('/api/mono');
  dispatch({ type: FETCH_KITTENS, payload: res.data });
};

export const generatePattern = (values, history) => async dispatch => {
  const res = await axios.post('/api/generate', values);
  history.push('/');
  dispatch({ type: GENERATE_PATTERN, payload: res.data });
};

export const fetchPattern = () => async dispatch => {
  const res = await axios.get('/api/pattern');
  dispatch({ type: FETCH_PATTERN, payload: res.data });
};

export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}
