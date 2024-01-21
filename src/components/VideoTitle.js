import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeShowMovie } from '../utils/moviesSlice';

const VideoTitle = ({ title, overview }) => {
  const dispatch = useDispatch();
  const handleBackClick = () => {
    dispatch(removeShowMovie(false));
}
  const showMovie = useSelector(store => store.movies.showMovie);
  return (
    <div className='w-[100%]  aspect-video pt-[30%] md:pt-[20%] px-6 md:px-14  text-white bg-gradient-to-r from-black absolute pt-36 px-12'>
      <h1 className='text-2xl w-5/12 md:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
      <div>
      <button className='bg-white text-black p-1 px-2 my-4 md:my-0 md:p-4 md:px-12 text-lg md:text-xl rounded-md hover: bg-opacity-80'> ▶Play</button>
      <button className='hidden md:inline-block mx-2 bg-gray-500 text-white p-4  px-12 text-xl bg-opacity-50 rounded-md'>More Info</button>
      </div>
      {showMovie &&  <button onClick={handleBackClick} className='bg-white  text-black p-1 px-2 my-6 md:mb-2 md:p-4 md:px-12 text-lg md:text-xl rounded-md hover: bg-opacity-80'>Back</button>}
    </div>
  )
}

export default VideoTitle