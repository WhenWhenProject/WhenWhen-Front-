import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from './Login';
import createSagaMiddleware from '@redux-saga/core';
import { rootSage } from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootSage,
  middleware: [sagaMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
