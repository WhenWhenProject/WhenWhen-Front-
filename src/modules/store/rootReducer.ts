import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { loginReducer, loginSaga } from "./Login";

export const rootReducer = combineReducers({
  login: loginReducer,
});

export function* rootSaga() {
  yield all([loginSaga()]);
}
