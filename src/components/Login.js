import React, { useState,useRef } from 'react';
import Header from "./Header";
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {

    const [isSignInOpen, setIsSignInOpen] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const handleClick = () => {
        setIsSignInOpen(!isSignInOpen);
  }
  
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;
    
    if (!isSignInOpen) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + "-" + errorMessage);
    setErrorMessage(errorMessage);
    // ..
  });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + "-" + errorMessage);
    setErrorMessage(errorMessage);
  });
    }
  }

  return (
      <div >
          
          <img  className='absolute ' src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="NetFlix BackGround" />
          <Header />
          <form onSubmit={(e)=> e.preventDefault()} className='absolute w-3/12 px-12 pt-12 pb-20 my-20 right-0 left-0 mx-auto  bg-black bg-opacity-70'>
              <h1 className='text-white py-6 text-4xl font-bold'>{isSignInOpen ? "Sign In" : "Sign Up"}</h1>
              {!isSignInOpen && <input type="text" placeholder='Full Name' className='w-full text-[#8c8c8c] rounded-md bg-[#333]  my-4 pl-4 py-4 ' />}
              <input type="text" ref={email} placeholder='Email Address' className='w-full text-[#8c8c8c] rounded-md bg-[#333]  my-4 pl-4 py-4 ' />
        <input type="password" ref={password} placeholder='Password' className=' text-[#8c8c8c] w-full rounded-md bg-[#333] my-4 p-4' />
        <p className='text-red-500 font-bold text-lg' >{errorMessage}</p>
              <button onClick={handleButtonClick} className='bg-red-700 text-lg text-white w-full my-6 rounded-md  p-4'>{isSignInOpen? "Sign In" : "Sign Up"}</button>
              <span className='text-[#8c8c8c]'>{isSignInOpen? "New to Netflix? " : "Already a User? "} </span>
              <span className='text-white cursor-pointer hover:underline' onClick={handleClick}>{isSignInOpen ? "Sign Up Now" : "Sign In Now"}</span>
           </form>

    </div>
  )
}

export default Login