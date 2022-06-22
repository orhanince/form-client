import * as types from "./constants";
/**
 * Login action
 * @param {func} successFunc 
 * @param {func} errorFunc 
 */
export function DoLogin(value,successFunc = () => {}, errorFunc = () => {}) {
  return {
    value: value,
    type: types.DO_LOGIN,
    successFunc: successFunc,
    errorFunc: errorFunc,
  };
}

/**
 * Set user
 * @param {func} successFunc 
 * @param {func} errorFunc 
 */
 export function SetUser(value,successFunc = () => {}, errorFunc = () => {}) {
  return {
    value: value,
    type: types.SET_USER,
    successFunc: successFunc,
    errorFunc: errorFunc,
  };
}

/**
 * Login action
 * @param {func} successFunc 
 * @param {func} errorFunc 
 */
 export function SendContact(value,successFunc = () => {}, errorFunc = () => {}) {
  return {
    value: value,
    type: types.SEND_CONTACT,
    successFunc: successFunc,
    errorFunc: errorFunc,
  };
}

