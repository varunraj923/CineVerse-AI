import React, { useEffect } from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  // 🔐 Handle Firebase logout
  const HandleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful. onAuthStateChanged will trigger and redirect.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 🔄 Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/BrowsePage");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
   <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
  <div className="p-2 ml-5">
    <img
      className="w-32 h-14 drop-shadow-[0_0_2px_white] shadow-lg"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Cineverse_logo.svg/1200px-Cineverse_logo.svg.png"
      alt="logo"
    />
  </div>

  {user && (
    <div className="flex p-2 justify-between">
      <img
        className="hidden md:block w-8 h-10 mr-2 rounded-xl"
        src="https://occ-0-4345-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
        alt="user"
      />
      <button
        onClick={HandleSignout}
        className="font-bold text-white text-sm bg-red-500 hover:bg-red-600 h-8 px-4 rounded-xl cursor-pointer"
      >
        Signout
      </button>
    </div>
  )}
</div>

  );
};

export default Header;

