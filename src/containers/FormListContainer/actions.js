import * as types from "./constants";

/**
 * Get user forms action
 * @param {func} successFunc 
 * @param {func} errorFunc 
 */
export function GetUserForms(successFunc = () => {}, errorFunc = () => {}) {
  return {
    type: types.GET_USER_FORMS,
    successFunc: successFunc,
    errorFunc: errorFunc,
  };
}

/**
 * Set user forms action
 * @param {func} successFunc 
 * @param {func} errorFunc 
 */
 export function SetUserForms(value,successFunc = () => {}, errorFunc = () => {}) {
  return {
      type: types.SET_USER_FORMS,
      value: value,
      successFunc: successFunc,
      errorFunc: errorFunc,
  };
}
