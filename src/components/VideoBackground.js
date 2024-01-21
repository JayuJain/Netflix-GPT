import React, { useEffect } from 'react';
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import useTrailerVideo from '../hooks/useTrailerVideo';


const VideoBackground = ({ trailerId }) => {

  useTrailerVideo(trailerId);
  const trailerVideo = useSelector(store => store.movies.trailerVideo);
  if(!trailerVideo) return
  console.log(trailerVideo);
  // const { key } = trailerVideo;
  
  return (
    <div >
      <iframe className='w-[100%] aspect-video'
        src="https://www.youtube.com/embed/QfFasuouxQI?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1"
        title="YouTube video player"
        ></iframe>
    </div>
  )
}

export default VideoBackground