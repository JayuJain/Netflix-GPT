import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { LOGIN_BG } from '../utils/constants';

const GptSearchPage = () => {
  return (
    <>
     <div className='fixed -z-10'>
          <img className='h-screen object-cover md:w-screen'  src={LOGIN_BG} alt="NetFlix BackGround" />
          </div>
      <div > 
          <GptSearchBar />
          <GptMovieSuggestions />
      </div>
      </>
  )
}

export default GptSearchPage;