import { takeLatest,put } from "redux-saga/effects";
import * as types from "./constants";
import ApiService from "../../utils/requests";


export const sendContactSaga = function* (action) {
  try {
    const response = yield ApiService.sendContact.post("/contact", action.value);
    console.log("ourresponse", response);
    action.successFunc(response);
  } catch (e) {
    console.log(e);
    action.errorFunc();
  }
};


const contactSaga = function* setDefaultLoadingSaga() {
  yield takeLatest(types.SEND_CONTACT, sendContactSaga)
};

export default contactSaga;
