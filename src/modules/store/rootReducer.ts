import { combineReducers } from 'redux';
import LoginReducer from './Login';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  login: LoginReducer,
});

export function* rootSage() {
  yield all([]);
}
