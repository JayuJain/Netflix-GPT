import React from 'react'

const VideoTitle = ({ title, overview }) => {
  

  return (
    <div className='w-[100%] mt-[4%] aspect-video pt-[20%] px-24 text-white bg-gradient-to-r from-black absolute pt-36 px-12'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
      <button className='bg-white text-black p-4 px-12 text-xl rounded-md hover: bg-opacity-80'>▶️Play</button>
      <button className='mx-2 bg-gray-500 text-white p-4  px-12 text-xl bg-opacity-50 rounded-md'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle