import React, { useRef } from 'react'
import lang from "../utils/languageconstant"
import { useDispatch, useSelector } from 'react-redux';
import openai from "../utils/openai";
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResults } from '../utils/gptSlice';

const GptSearchBar = () => {

  const searchText = useRef(null);
  const dispatch = useDispatch();
  const searchMovies = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);

    const json = await data.json();
    return json.results;
   }

  const handleGptSearchClick = async () => {

    const query = "Suggest 5 movies for" + searchText.current.value + "in the form of array";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: query }],
      model: 'gpt-3.5-turbo',
    });

    const results = gptResults.choices?.[0]?.message?.content;

    const gptMovies =  JSON.parse(results)

    console.log(typeof (gptMovies));
    console.log(gptMovies);
    
    const promiseArray = gptMovies.map((movie) => searchMovies(movie));

    const tmdbResults = await Promise.all(promiseArray);
    
    dispatch(addGptMovieResults({movieNames: gptMovies,movieResults: tmdbResults}));

    // console.log(gptResults.choices?.[0]?.message?.content);
  }

    const langkey = useSelector(store=> store.config.lang)
  return (
      <div className='pt-[35%] md:pt-[10%] flex justify-center'>
          <form className='w-full  mx-2  md:mx-0 md:w-1/2 grid grid-cols-12 bg-black' onSubmit={(e)=>e.preventDefault()} >
              <input ref={searchText} className=' m-5 p-2 md:p-4 md:m-4 col-span-9'  type="text" placeholder={lang[langkey].placeholder} />
              <button  onClick={handleGptSearchClick} className='m-6  md:py-2 mx-2 md:px-4 col-span-3 md:m-4 bg-[#c11119] text-white roudned-lg'>{lang[langkey].search}</button>
          </form>
    </div>
  )
}

export default GptSearchBar