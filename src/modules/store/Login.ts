import { call, put, takeEvery } from "@redux-saga/core/effects";
import { createSlice } from "@reduxjs/toolkit";
import { createImportSpecifier } from "typescript";
import api from "../api/api";
import { API_LOGIN } from "../api/keyFactory";

export type LoginType = {
  loading: boolean;
  login: boolean;
  error: any;
};

export type LoginPayload = { x; username: string; password: string };

const initialState: LoginType = {
  loading: false,
  login: false,
  error: null,
};

const loginUserAPI = (loginData: { username: string; password: string }) => {
  return api.POST({ url: API_LOGIN, loginData });
};

export function* getLoginSaga(action: {
  payload: { username: string; password: string };
}) {
  console.log("saga");
  const { getLoginSuccess, getLoginFailure } = loginAction;
  const param = action.payload;
  try {
    const response = yield call(loginUserAPI, param);
    yield put(getLoginSuccess(response));
  } catch (err) {
    yield put(getLoginFailure(err));
  }
}

export function* loginSaga() {
  const { getLogin } = loginAction;
  yield takeEvery(getLogin, getLoginSaga);
}

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getLogin: (state, action) => {
      state.loading = true;
    },
    getLoginSuccess: (state, action) => {
      state.loading = false;
      state.login = action.payload;
    },
    getLoginFailure: (state, { payload: error }) => {
      state.loading = false;
      state.error = error;
    },
  },
});

export const login = LoginSlice.name;
export const loginReducer = LoginSlice.reducer;
export const loginAction = LoginSlice.actions;
