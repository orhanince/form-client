import { takeLatest, put } from "redux-saga/effects";
import * as types from "./constants";
import ApiService from "../../utils/requests";
import { SetUserForms } from "./actions";

export const getUserFormsSaga = function* (action) {
  try {
    const response = yield ApiService.getUserForms.get('/');
    console.log('nedir => ', response.data.data)
    action.successFunc(response.data.data);
    yield put(SetUserForms(response.data.data))
  } catch (e) {
    console.log(e);
    action.errorFunc();
  }
};

const userFormsSaga = function* setDefaultLoadingSaga() {
  yield takeLatest(types.GET_USER_FORMS, getUserFormsSaga);
};

export default userFormsSaga;
