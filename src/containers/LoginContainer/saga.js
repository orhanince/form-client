import { takeLatest,put } from "redux-saga/effects";
import * as types from "./constants";
import ApiService from "../../utils/requests";
import { SetUser } from "./actions";

export const doLoginSaga = function* (action) {
  try {
    const response = yield ApiService.login.post('/login', action.value);
    console.log('res', response)
    if (response.data.status) {
      action.successFunc(response.data);
      yield put(SetUser(response.data));
      localStorage.setItem('user_id', response.data.user_id)
      localStorage.setItem('user_token', response.data.token)
    } else {
      action.errorFunc();
    }
  } catch (e) {
    console.log(e);
    action.errorFunc();
  }
};

export const getUserSaga = function* (action) {
  try {
    const response = yield ApiService.getUsers.post("/getUser", action.value);
    console.log("ourresponse", response);
    action.successFunc(response);
  } catch (e) {
    console.log(e);
    action.errorFunc();
  }
};

const loginContainerSaga = function* setDefaultLoadingSaga() {
  yield takeLatest(types.DO_LOGIN, doLoginSaga);
  yield takeLatest(types.GET_USER, getUserSaga);
};

export default loginContainerSaga;
