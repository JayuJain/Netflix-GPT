// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflixgpt-d5521.firebaseapp.com",
  projectId: "netflixgpt-d5521",
  storageBucket: "netflixgpt-d5521.appspot.com",
  messagingSenderId: "57572519602",
  appId: "1:57572519602:web:3963467a9facf8bbbca3ab",
  measurementId: "G-GG3LP11KZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
