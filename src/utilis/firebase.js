// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFFCkYKl2QigVLi4EXNiT0u5vDvv0wP9E",
  authDomain: "netflixgpt-e6752.firebaseapp.com",
  projectId: "netflixgpt-e6752",
  storageBucket: "netflixgpt-e6752.appspot.com",
  messagingSenderId: "436982371399",
  appId: "1:436982371399:web:d96d49c6718d7b52770d62",
  measurementId: "G-MQ2R07FEVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();