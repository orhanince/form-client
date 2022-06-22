import * as types from './constants';
import {fromJS} from 'immutable';

const initialState = fromJS({
  data: null,
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      console.log('hee', action.value)
      return state.set('data', fromJS(action.value));
    default:
      return state;
  }
}

export default userReducer;