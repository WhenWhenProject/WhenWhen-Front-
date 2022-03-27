import { call, put } from '@redux-saga/core/effects';
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import api from '../api/api';
import { API_LOGIN } from '../api/keyFactory';

export type LoginType = {
  loginLoading: boolean;
  login: boolean;
  error: any;
};

export type LoginPayload = {
  username: string;
  password: string;
};

const initialState: LoginType = {
  loginLoading: false,
  login: false,
  error: null,
};

const login = createAction('login/LOGIN');

const loginUserAPI = (loginData: { username: string; password: string }) => {
  return api.POST({ url: API_LOGIN, loginData });
};

function* loginUser(
  action: PayloadAction<{ username: string; password: string }>
) {
  try {
    const result = yield call(loginUserAPI, action.payload);
    yield put({ type: login });
  } catch (error) {
    console.error(error);
  }
}

export const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    updateLogin: (state) => {
      state.login = true;
    },
    updateLogout: (state) => {
      state.login = false;
    },
  },
});

export const { updateLogin, updateLogout } = LoginSlice.actions;

export default LoginSlice.reducer;
