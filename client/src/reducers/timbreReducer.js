import {
  FETCH_KITTENS,
  GENERATE_PATTERN,
  FETCH_PATTERN
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_KITTENS:
      //console.log(action);
      return action.payload || false;
    case GENERATE_PATTERN:
      return action.payload || false;
    case FETCH_PATTERN:
      return action.payload || false;
    default:
      return state;
  }
}
