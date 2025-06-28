import React from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
   const user = useSelector(store => store.user);
  const HandleSignout = ()=>{
   
signOut(auth).then(() => {
  // Sign-out successful.
  navigate('/');
}).catch((error) => {
  // An error happened.
  console.log(error);
});


  }
  return (
<div className="flex justify-between  bg-black shadow-lg shadow-black text-white p-2">


   <div className="p-2 bg-black inline-block ml-5">
  <img
    className="w-32 h-14 drop-shadow-[0_0_2px_white] shadow-lg"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Cineverse_logo.svg/1200px-Cineverse_logo.svg.png"
    alt="logo"
  />
</div>
        <div className='flex'>
         
            <img className='w-8 h-10 mt-4 mr-2 rounded-xl' src="https://occ-0-4345-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e" alt="img" />
            <button onClick={HandleSignout} className='mr-5 text-sm bg-red-500 h-8 mt-5 w-15 rounded-xl font-bold cursor-pointer'>Signout</button>
        </div>
        

      
    </div>
  )
}

export default Header;
