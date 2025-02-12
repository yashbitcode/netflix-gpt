import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlaying: null,
        popular: null,
        topRated: null, 
        upcoming: null,
        primaryMovieTrailer: null
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlaying = action.payload;
        },
        addPopular: (state, action) => {
            state.popular = action.payload;
        },
        addTopRated: (state, action) => {
            state.topRated = action.payload;
        },
        addUpcoming: (state, action) => {
            state.upcoming = action.payload;
        },
        addPrimaryMovieTrailer: (state, action) => {
            state.primaryMovieTrailer = action.payload;
        },
    }
});

export const {addNowPlaying, addPopular, addTopRated, addUpcoming, addPrimaryMovieTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;