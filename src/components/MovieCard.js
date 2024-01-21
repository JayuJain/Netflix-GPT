import React from 'react'
import { API_OPTIONS, IMG_CDN_URL } from '../utils/constants';
import {useDispatch} from "react-redux";
import { addShowMovieData,addShowMovie } from '../utils/moviesSlice';

const MovieCard = ({ movie, posterPath }) => {
  const dispatch = useDispatch();
  if (!posterPath) return null;
  

  const handleMovieOpen = async () => {
    // const data = await fetch('https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US', API_OPTIONS);
    // const json = await data.json();

    // const filterData = json.results.filter((movie) => movie.type === "Trailer");

    dispatch(addShowMovieData(movie))
    dispatch(addShowMovie(true));

  }

  
  return (
    <div onClick={handleMovieOpen} className="w-32 md:w-48 pr-4 cursor-pointer">
      <img src={IMG_CDN_URL + posterPath} alt="" />
    </div>
  )
}

export default MovieCard;