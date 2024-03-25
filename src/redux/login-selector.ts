import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./root";

const _selectLogin = (state: RootState) => state.login;

export const selectLogin = createSelector(
  [_selectLogin],
  (login) => login
)