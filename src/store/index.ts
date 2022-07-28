import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import searchSlice from "./slices/search.slice";
import { discogsApi } from "./services/discogs.api";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    [discogsApi.reducerPath]: discogsApi.reducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
