import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: "gpt",
    initialState: {
        gptSearchToggle: true,
        moviesList: null,
        queryResult: null
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.gptSearchToggle = !state.gptSearchToggle;
        },
        addQueryResult: (state, action) => {
            const {moviesList, moviesResult} = action.payload;

            state.moviesList = moviesList;
            state.queryResult = moviesResult;
        }
    }
});

export const {toggleGptSearch, addQueryResult} = gptSearchSlice.actions;
export default gptSearchSlice.reducer;