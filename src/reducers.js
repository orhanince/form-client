import { combineReducers } from "redux";
import loadingReducer from "./containers/LoadingContainer/reducer"; 
import userReducer from './containers/LoginContainer/reducer';
import userFormsReducer from "./containers/FormListContainer/reducer";
/**
 * Set root reducer
 */
export default function getRootReducer() {
  return combineReducers({
    loading: loadingReducer,
    user: userReducer,
    forms: userFormsReducer
  });
}
