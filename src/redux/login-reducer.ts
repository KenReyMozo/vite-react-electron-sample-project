import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type LoginT = {
  email?: string;
  password?: string;
}

const InitialState = {
  email: '',
  password: '',
}

const LoginSlice = createSlice({
  name: 'login',
  initialState: InitialState,
  reducers: {
    editLogin (state, action: PayloadAction<LoginT>) {
      const { payload } = action;
      return {
        ...state,
        ...payload,
      }
    },
    clearLogin () {
      return InitialState
    }
  }
});

export const {
  editLogin,
  clearLogin,
} = LoginSlice.actions;
export default LoginSlice.reducer;