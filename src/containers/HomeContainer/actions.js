import * as types from "./constants";

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
