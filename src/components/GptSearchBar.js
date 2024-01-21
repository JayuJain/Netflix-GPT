import React from 'react'
import lang from "../utils/languageconstant"
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langkey = useSelector(store=> store.config.lang)
  return (
      <div className='pt-[10%] flex justify-center'>
          <form className='w-1/2 grid grid-cols-12 bg-black'  >
              <input className='p-4 m-4 col-span-9'  type="text" placeholder={lang[langkey].placeholder} />
              <button className='py-2 px-4 col-span-3 m-4 bg-[#c11119] text-white roudned-lg'>{lang[langkey].search}</button>
          </form>
    </div>
  )
}

export default GptSearchBar