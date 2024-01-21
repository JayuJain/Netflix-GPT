import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { LOGIN_BG } from '../utils/constants';

const GptSearchPage = () => {
  return (
      <div >
          <div className='absolute -z-10'>
          <img src={LOGIN_BG} alt="NetFlix BackGround" />
          </div>
          
          <GptSearchBar />
          <GptMovieSuggestions />
    </div>
  )
}

export default GptSearchPage;