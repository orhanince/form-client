import { takeLatest } from "redux-saga/effects";
import * as types from "./constants";
import ApiService from "../../utils/requests";

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

const appLoadingSaga = function* setDefaultLoadingSaga() {
  yield takeLatest(types.GET_USERS, getUserSaga);
};

export default appLoadingSaga;
