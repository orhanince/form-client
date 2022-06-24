import { takeLatest } from "redux-saga/effects";
import * as types from "./constants";
import ApiService from "../../utils/requests";

export const doRegisterSaga = function* (action) {
  try {
    console.log(action.values)
    const response = yield ApiService.register.post('/register', action.values);
    localStorage.setItem('user_id', response.data.user_id);
    localStorage.setItem('user_token', response.data.token);
    action.successFunc(response);
  } catch (e) {
    console.log(e);
    action.errorFunc();
  }
};

export const getUserSaga = function* (action) {
  try {
    const response = yield ApiService.getUsers.get("/");
    console.log("ourresponse", response);
    action.successFunc(response);
  } catch (e) {
    console.log(e);
    action.errorFunc();
  }
};

const registerContainerSaga = function* setDefaultLoadingSaga() {
  yield takeLatest(types.DO_REGISTER, doRegisterSaga);
  yield takeLatest(types.GET_USERS, getUserSaga);
};

export default registerContainerSaga;
