import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  // isAuthenticated: boolean;
  user: {
    email: string | null;
  } | null;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUpSuccess(state, action: PayloadAction<{  email: string;  }>) {
      state.user = action.payload;
      state.error = null;
    },
    signUpFailure(state, action: PayloadAction<string>) {
      state.user = null;
      state.error = action.payload;
    },
    signOut(state) {
      state.user = null;
      state.error = null;
    },
  },
});

export const { signUpSuccess, signUpFailure, signOut } = authSlice.actions;
export default authSlice.reducer;
