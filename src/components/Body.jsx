import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import BrowsePage from './BrowsePage';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from '../utils/userSlice'



const Body = () => {
  const dispatch = useDispatch();

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid, email, displayName} = user;
    dispatch(addUser({uid : uid, email : email, displayName : displayName}));


    // ...
  } else {
    // User is signed out
    // ...
    dispatch(removeUser());
  }
});
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/BrowsePage" element={<BrowsePage />} />
        
       
      </Routes>
    </div>
  );
};

export default Body;
