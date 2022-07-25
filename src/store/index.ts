import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/search.slice";

export const store = configureStore({
  reducer: {
    slice: searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
