import React from 'react'
import Header from "./Header";
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import { useSelector } from 'react-redux';
import GptSearchPage from './GptSearchPage';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
const Browse = () => {
  const showGptPage = useSelector(store => store.gpt.showGptPage);
  const showMovie = useSelector(store => store.movies.showMovie);
  const showMovieData = useSelector(store => store.movies.showMovieData)
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div >
      <Header />
      {showGptPage === true && showMovie ===false ? <GptSearchPage /> :
        (showMovie === true && showGptPage === true) || (showMovie === true && showGptPage === false) ?
          <div className=' mt-[10%] md:mt-[-12%]'>
            <VideoTitle title={showMovieData.title} overview={showMovieData.overview} />
            <VideoBackground trailerId={showMovieData.id} />
          </div>
           : 
        <div>
<MainContainer />
      <SecondaryContainer/>
        </div>
           }
      
    </div>
  )
}

export default Browse