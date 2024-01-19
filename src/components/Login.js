import React, { useState } from 'react';
import Header from "./Header";

const Login = () => {

    const [isSignInOpen, setIsSignInOpen] = useState(true);

    const handleClick = () => {
        setIsSignInOpen(!isSignInOpen);
    }

  return (
      <div >
          
          <img  className='absolute ' src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="NetFlix BackGround" />
          <Header />
          <form className='absolute w-3/12 px-12 pt-12 pb-20 my-20 right-0 left-0 mx-auto  bg-black bg-opacity-70'>
              <h1 className='text-white py-6 text-4xl font-bold'>{isSignInOpen ? "Sign In" : "Sign Up"}</h1>
              {!isSignInOpen && <input type="text" placeholder='Full Name' className='w-full text-[#8c8c8c] rounded-md bg-[#333]  my-4 pl-4 py-4 ' />}
              <input type="email" placeholder='Email Address' className='w-full text-[#8c8c8c] rounded-md bg-[#333]  my-4 pl-4 py-4 ' />
              <input type="password" placeholder='Password'className=' text-[#8c8c8c] w-full rounded-md bg-[#333] my-4 p-4' />
              <button className='bg-red-700 text-lg text-white w-full my-6 rounded-md  p-4'>{isSignInOpen? "Sign In" : "Sign Up"}</button>
              <span className='text-[#8c8c8c]'>{isSignInOpen? "New to Netflix? " : "Already a User? "} </span>
              <span className='text-white cursor-pointer hover:underline' onClick={handleClick}>{isSignInOpen ? "Sign Up Now" : "Sign In Now"}</span>
           </form>

    </div>
  )
}

export default Login