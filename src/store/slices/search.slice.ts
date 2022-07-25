import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ISearchState {
  history: Record<string, string>;
  test: boolean;
}

const initialState: ISearchState = {
  history: {},
  test: true,
};

const reducers = {
  setIsTest: (state: ISearchState, action: PayloadAction<boolean>) => ({
    ...state,
    test: action.payload,
  }),
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers,
});

export const { setIsTest } = searchSlice.actions;

export default searchSlice.reducer;
