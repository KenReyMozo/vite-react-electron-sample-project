import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./redux/login-reducer";

export const store = configureStore({

  reducer: {
    login: loginReducer,
  }
})

export type AppDipatch = typeof store.dispatch;