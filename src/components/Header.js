import React, { useEffect } from 'react';
import { signOut,onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO, SUPPORTED_LANGUAGE } from '../utils/constants';
import { toggleGptPage } from '../utils/gptSlice';
import { changeLang } from '../utils/configSlice';


const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptPage = useSelector(store => store.gpt.showGptPage)

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

  const handleGptClick = () => {
    dispatch(toggleGptPage());
  }

  const handleLang = (e) => {
    dispatch(changeLang(e.target.value));
  }

  return (
    
    <div className={ ` flex flex-col md:flex-row justify-between absolute  ${user ? ( showGptPage ? 'w-[100%] z-10 absolute bg-gradient-to-b from-black' : 'w-[100%] z-10 relative md:bg-gradient-to-b from-black' ): 'bg-black  bg-opacity-60 pr-[250px] pb-[830px] md:pr-[1272px] md:pb-[585px]'} `} >
      <img className={`${user ? 'w-40 py-0 md:py-2 mx-auto md:mx-0' : 'w-56 mx-5 py-2'}`} src={LOGO} alt="Logo" />
      {user && <div className='flex justify-center md:m-6 '>
       {showGptPage && <select onChange={handleLang} className='cursor-pointer bg-gray-600 text-white py-2 px-2 mx-4' >
          {SUPPORTED_LANGUAGE.map((lang) => <option  key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}

        </select>}
        <button className='px-4 bg-purple-500 text-white rounded-lg' onClick={handleGptClick}>{showGptPage ? "Home Page" : "Gpt Search"}</button>
        <img className='w-8 h-8 rounded-lg mx-4' src={user.photoURL} alt="" />
        <button className='h-8 px-2   bg-[#c11119] text-white  font-bold rounded-lg' onClick={handleClick}>Sign Out</button>
       
      </div>
      }
      
    </div>
  )
}

export default Header