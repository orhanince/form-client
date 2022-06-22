import * as types from './constants';
import {fromJS} from 'immutable';

const initialState = fromJS({
  data: [],
});

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USERS:
      return state.set('data', fromJS(action.value));
    default:
      return state;
  }
}

export default loadingReducer;