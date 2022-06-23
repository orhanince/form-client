import { call, all } from "redux-saga/effects";

import appLoadingSaga from "./../containers/LoginContainer/saga";
import registerContainerSaga from "./../containers/RegisterContainer/saga";
import loginContainerSaga from "./../containers/LoginContainer/saga";
import contactSaga from "./../containers/ContactContainer/saga";
import getUserFromsSaga from './../containers/FormListContainer/saga';

/**
 * Set root saga
 */
const rootSaga = function* rootSaga() {
  yield all([call(appLoadingSaga), call(registerContainerSaga), call(loginContainerSaga), call(contactSaga), call(getUserFromsSaga)]);
};

export default rootSaga;
