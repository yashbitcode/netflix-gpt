import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlaying: null,
        primaryMovieTrailer: null
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlaying = action.payload;
        },
        addPrimaryMovieTrailer: (state, action) => {
            state.primaryMovieTrailer = action.payload;
        },
    }
});

export const {addNowPlaying, addPrimaryMovieTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;