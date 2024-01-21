import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies:null,
        trailerVideo: null,
        showMovie:false,
        showMovieData:null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpComingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        },
        addShowMovie: (state, action) => {
            state.showMovie = action.payload;
        },
        removeShowMovie: (state, action) => {
            state.showMovie = action.payload;
        },
        addShowMovieData: (state, action) => {
            state.showMovieData = action.payload;
        }
    }
})

export const { addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies ,addUpComingMovies,addShowMovie,addShowMovieData,removeShowMovie} = moviesSlice.actions;

export default moviesSlice.reducer;