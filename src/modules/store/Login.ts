import { createSlice } from '@reduxjs/toolkit';

export type LoginType = {
  login: boolean;
};

const initialState: LoginType = {
  login: false,
};

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
