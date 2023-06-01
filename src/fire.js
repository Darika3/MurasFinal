// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4rMhHOmI5C0DEZycW69cjpmGsauaj1aI",
  authDomain: "murasfinal.firebaseapp.com",
  projectId: "murasfinal",
  storageBucket: "murasfinal.appspot.com",
  messagingSenderId: "87988603793",
  appId: "1:87988603793:web:8f1ba4bd7a427ba096a830",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
