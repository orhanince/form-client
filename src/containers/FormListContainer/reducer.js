import * as types from './constants';
import {fromJS} from 'immutable';

const initialState = fromJS({
 forms: [],
});

const userFormsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER_FORMS:
      return state.set('forms', fromJS(action.value));
    default:
      return state;
  }
}

export default userFormsReducer;