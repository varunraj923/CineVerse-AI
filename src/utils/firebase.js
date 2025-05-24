// Import the functions you need from the SDKs you need
import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPLLaNh57-NuXVAxyd3BSye8eNalfmAjU",
  authDomain: "cineverse-ai-810b8.firebaseapp.com",
  projectId: "cineverse-ai-810b8",
  storageBucket: "cineverse-ai-810b8.firebasestorage.app",
  messagingSenderId: "1023103013347",
  appId: "1:1023103013347:web:d153883731ac4e7d0f50d6",
  measurementId: "G-WNVD445ZKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

