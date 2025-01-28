import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer, // Add reducers here
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;