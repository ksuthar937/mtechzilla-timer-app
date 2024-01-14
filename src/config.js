// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgPcIYB5AB_H5KuX7yynmNTEFmcY1jKps",
  authDomain: "mtechzilla-github-card.firebaseapp.com",
  projectId: "mtechzilla-github-card",
  storageBucket: "mtechzilla-github-card.appspot.com",
  messagingSenderId: "323257118390",
  appId: "1:323257118390:web:64e17c96367be6a8e90017",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const googleAuthProvider = new GoogleAuthProvider();

export default app;
