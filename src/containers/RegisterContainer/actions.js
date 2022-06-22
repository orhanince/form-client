import * as types from "./constants";

/**
 * Register
 * @param {func} successFunc 
 * @param {func} errorFunc 
 */
 export function DoRegister(values,successFunc = () => {}, errorFunc = () => {}) {
  return {
    values: values,
    type: types.DO_REGISTER,
    successFunc: successFunc,
    errorFunc: errorFunc,
  };
}

/**
 * Get users action
 * @param {func} successFunc 
 * @param {func} errorFunc 
 */
export function GetUsers(successFunc = () => {}, errorFunc = () => {}) {
  return {
    type: types.GET_USERS,
    successFunc: successFunc,
    errorFunc: errorFunc,
  };
}
