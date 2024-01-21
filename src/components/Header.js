import React, { useEffect } from 'react';
import { signOut,onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO } from '../utils/constants';


const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(store => store.user);
  // console.log(user);

  useEffect(() => {
    
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("Hii");
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email, photoURL: photoURL }))
        
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
        // User is signed out
        // ...
      }
    });

    return () => unsubsribe();
  }, []);

  const handleClick = () => {
    signOut(auth).then(() => {

    }).catch((error) => {
      navigate("/error")
    });
  }

  return (
    
    <div className={ ` flex justify-between  absolute ${user ? 'w-[100%] bg-gradient-to-b from-black' : 'bg-black  bg-opacity-60 pr-[1260px] pb-[750px]'} `} >
      <img className={`${user ? 'w-40 py-2' : 'w-56 mx-5 py-2'}`} src={LOGO} alt="Logo" />
      {user && <div className='flex m-6 '>
      <p className='text-black  text-lg'>{user.displayName }</p>
        <img className='w-8 h-8 rounded-lg mx-4' src={user.photoURL} alt="" />
        <button className='h-8 px-2   bg-[#c11119] text-white  font-bold rounded-lg' onClick={handleClick}>Sign Out</button>
       
      </div>
      }
      
    </div>
  )
}

export default Header