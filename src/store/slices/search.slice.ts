import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

const SEARCH_LS_KEY = "dgSearchHistory";
export interface ISearchState {
  history: string[];
  test: boolean;
}

const getInitialState = (): ISearchState => {
  const prevHistory = JSON.parse(localStorage.getItem(SEARCH_LS_KEY) || "null");
  return {
    history: Array.isArray(prevHistory) ? prevHistory : [],
    test: true,
  };
};

const updateLocalStorageHistory = (history: string[]) => {
  localStorage.setItem(SEARCH_LS_KEY, JSON.stringify(history));
  return history;
};

const reducers = {
  setIsTest: (state: ISearchState, action: PayloadAction<boolean>) => ({
    ...state,
    test: action.payload,
  }),
  deleteFromHistory: (state: ISearchState, action: PayloadAction<string>) => {
    return {
      ...state,
      history: updateLocalStorageHistory(
        state.history.filter(term => term !== action.payload),
      ),
    };
  },
  addToHistory: (state: ISearchState, action: PayloadAction<string>) => {
    return {
      ...state,
      history: updateLocalStorageHistory([
        action.payload,
        ...state.history.filter(term => term !== action.payload),
      ]),
    };
  },
  clearHistory: (state: ISearchState) => {
    localStorage.removeItem(SEARCH_LS_KEY);
    return {
      ...state,
      history: [],
    };
  },
};

export const searchSlice = createSlice({
  name: "search",
  initialState: getInitialState(),
  reducers,
});

export const getSearchSliceItem =
  (itemKey: keyof ISearchState) => (state: RootState) =>
    state.search?.[itemKey];

export const { setIsTest, addToHistory } = searchSlice.actions;

export default searchSlice.reducer;
