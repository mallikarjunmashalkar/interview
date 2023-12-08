import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../pages/store";

export const store = configureStore({
  reducer: {
    users: UserReducer,
  },
});
