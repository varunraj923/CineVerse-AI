import React from 'react';
import { useState } from 'react';
import {Validate} from '../utils/validate';
import {auth} from '../utils/firebase'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile } from "firebase/auth";



import Header from './Header';






const Login = () => {
 

 
    const [LogedInPage, setLogedInPage] = useState(true);
    const [FullName, setFullName] = useState("");
    const [EmailId, setEmailId] = useState("");
    const [Password, setPassword] = useState("");
    const [Error, setError] = useState("");
  



    console.log(FullName);

    const isLoggedIn = ()=>{
        setLogedInPage(!LogedInPage);

    }



const HandleSignupSubmit = async(e)=>{
    e.preventDefault();
    const RegexErr = Validate(FullName, EmailId, Password);
    setError(RegexErr);

    if(Error) return;

    await createUserWithEmailAndPassword(auth, EmailId, Password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    setError(errorCode + ""  + errorMessage);
    // ..
  })

}

const HandleLoginSubmit = async (e) => {
  e.preventDefault();

  try {
    // Step 1: Login the user
    await signInWithEmailAndPassword(auth, EmailId, Password);

    // Step 2: Update display name
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: FullName,
      });

      // Optional: reload to ensure update reflects
      await auth.currentUser.reload();

      console.log("Login successful. Display Name:", auth.currentUser.displayName);
      
     
    }

  } catch (error) {
    setError(`${error.code} ${error.message}`);
  }
};


  return (
    <>
    <Header/>
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          'url("https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg")',
      }}
    >
      <div className="bg-black bg-opacity-70 bg-opacity-50 p-8 rounded-xl shadow-lg max-w-md w-full text-white">
        <h1 className="text-3xl font-bold text-center mb-6">{LogedInPage ? "Login" : "SignUp"}</h1>

        <form>

            {!LogedInPage &&   <div className="flex flex-col gap-1 mb-6">
            <label htmlFor="Password" className="text-sm font-medium">
              Full Name
            </label>
            <input value={FullName} onChange={(e) => setFullName(e.target.value)}
              className="p-3 rounded-md border border-gray-400 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              
              id="FullName"
              name="FullName"
              placeholder="Enter your Full Name"
              required
            />
          </div>
}
          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="EmailId" className="text-sm font-medium" >
              Email Id
            </label> 
            <input value={EmailId} onChange={(e)=>{setEmailId(e.target.value)}}
              className="p-3 rounded-md border border-gray-400 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              type="email"
              id="EmailId"
              name="EmailId"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col gap-1 mb-6">
            <label htmlFor="Password" className="text-sm font-medium">
              Password
            </label>
            <input value={Password} onChange={(e)=> setPassword(e.target.value)}
              className="p-3 rounded-md border border-gray-400 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              type="password"
              id="Password"
              name="Password"
              placeholder="Enter your password"
              required
            />
          </div>
          <p className='text-red-700 font-bold mb-3'>{Error}</p>
          <button onClick={LogedInPage ? HandleLoginSubmit : HandleSignupSubmit}
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition-colors text-white py-3 rounded-md font-semibold"
          >
            {LogedInPage ? "Login" : "SignUp"}
          </button>
          <h3 className='mt-2 cursor-pointer text-center p-2' onClick={isLoggedIn}>{LogedInPage ? "New User? Sign Up Now" : "Already Registered? Sign In Now"}</h3>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;


