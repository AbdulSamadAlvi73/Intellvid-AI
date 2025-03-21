// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_URL,
  authDomain: "intelivid.firebaseapp.com",
  projectId: "intelivid",
  storageBucket: "intelivid.firebasestorage.app",
  messagingSenderId: "819263876970",
  appId: "1:819263876970:web:6e4febe3ff07679fd5ff13",
  measurementId: "G-16K2T0MS7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}
export default app