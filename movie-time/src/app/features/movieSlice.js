import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: {},
  genres: {},
}

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres } = movieSlice.actions;

export default movieSlice.reducer;
