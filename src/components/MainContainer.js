import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movies = useSelector(store => store?.movies?.nowPlayingMovies);

  if (!movies) return;

  const { title, overview,id } = movies[0];
    // console.log(movies);
  return (
      <div className='mt-[-12%]' >
      <VideoTitle title={title} overview={overview} />
      <VideoBackground trailerId={id} />
    </div>
  )
}

export default MainContainer